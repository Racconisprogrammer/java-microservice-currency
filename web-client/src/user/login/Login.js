import React, {Component, useEffect, useCallback} from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Form, Input, Button, notification } from 'antd';

import { loginRequest } from '../../store/actions/auth-actions'

import './Login.css';

const FormItem = Form.Item;

const Login = () => {
    const { isLoading, message, error } = useSelector(state => state.auth);
    const dispatch = useDispatch();

    const login = useCallback((values) => dispatch(loginRequest(values)), [dispatch]);

    useEffect(() => {
        if (!isLoading && message) {
            notification.success(message);
        }
    }, [isLoading, message]);

    useEffect(() => {
        if (error) {
            notification.error({
                message: error.error,
                description: error.error_description
            });
        }
    }, [error]);

    return (
        <div className="login-container">
            <h1 className="page-title">Login</h1>
            <div className="login-content">
                <LoginForm login={login} />
            </div>
        </div>
    );
};

class LoginForm extends Component {
    constructor(props) {
        super(props);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleSubmit(values) {
        this.props.login(values);
    }

    render() {
        return (
            <Form onFinish={this.handleSubmit} className="login-form">
                <FormItem
                    name="username"
                    rules={[
                        {
                            required: true,
                            message: 'Please input your username!',
                        },
                    ]}
                >
                    <Input placeholder="Username"/>
                </FormItem>

                <FormItem
                    name="password"
                    rules={[
                        {
                            required: true,
                            message: 'Please input your password!',
                        },
                    ]}
                >
                    <Input.Password placeholder="Password" />
                </FormItem>
                <FormItem>
                    <Button type="primary" htmlType="submit" size="large" className="login-form-button">Login</Button>
                </FormItem>
            </Form>
        );
    }
}

export default Login;
