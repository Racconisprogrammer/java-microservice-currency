import React, { Component } from 'react';
import { connect } from 'react-redux';
import './App.less';
import {
  Route,
  withRouter,
  Switch
} from 'react-router-dom';

import { getCurrentUser } from '../util/APIUtils';

import { AccountsView, ExchangeView, HistoryView } from '../view'

import Login from '../user/login/Login';
import AppHeader from '../common/AppHeader';
import NotFound from '../common/NotFound';
import LoadingIndicator from '../common/LoadingIndicator';
import PrivateRoute from '../common/PrivateRoute';

import { Layout, notification } from 'antd';
import { requestProfile, logoutRequest } from "../store/actions/auth-actions";
const { Content } = Layout;

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      currentUser: null,
      isAuthenticated: false,
      isLoading: false
    };
    this.handleLogout = this.handleLogout.bind(this);
    this.loadCurrentUser = this.loadCurrentUser.bind(this);

    notification.config({
      placement: 'topRight',
      top: 70,
      duration: 3,
    });
  }

  loadCurrentUser() {
    getCurrentUser()
    .then(response => {
      this.setState({
        currentUser: response.name,
        isAuthenticated: true,
        isLoading: false
      });
    }).catch(error => {
      this.setState({
        isLoading: false
      });
    });
  }

  componentDidMount() {
    this.props.profile(this.props.token);
  }

  handleLogout(redirectTo="/", notificationType="success", description="You're successfully logged out.") {
    this.props.logout();
  }

  render() {
    if(this.state.isLoading) {
      return <LoadingIndicator />
    }

    return (
        <Layout className="app-container">
          <AppHeader isAuthenticated={this.props.isAuthenticated}
            currentUser={this.props.user}
            onLogout={this.handleLogout} />

          <Content className="app-content">
            <div className="container">
              <Switch>
                <PrivateRoute exact path="/" authenticated={this.props.isAuthenticated}
                              component={AccountsView}
                />
                <PrivateRoute path="/exchange/:from" authenticated={this.props.isAuthenticated}
                              component={ExchangeView}
                />
                <PrivateRoute path="/history/:account" authenticated={this.props.isAuthenticated}
                              component={HistoryView}
                />
                <Route path="/login" render={(props) => <Login {...props} />}/>
                <Route component={NotFound}/>
              </Switch>
            </div>
          </Content>
        </Layout>
    );
  }
}

const mapStateToProps = (state) => ({
  ...state.auth,
  isAuthenticated: state.auth.token != null
});

const mapDispatchToProps = (dispatch) => ({
  profile: () => dispatch(requestProfile()),
  logout: () => dispatch(logoutRequest())
});

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(App));
