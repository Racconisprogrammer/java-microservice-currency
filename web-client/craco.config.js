const CracoLessPlugin = require('craco-less');

module.exports = {
  plugins: [
    {
      plugin: CracoLessPlugin,
      options: {
        lessLoaderOptions: {
          lessOptions: {
            modifyVars: {           
              "@layout-body-background": "#FFFFFF",
			  "@layout-header-background": "#FFFFFF",
			  "@layout-footer-background": "#FFFFFF"  
			  },
            javascriptEnabled: true,
          },
        },
      },
    },
  ],
  devServer: {
    proxy: {
      '/**': 'http://172.17.0.1:8580'
    }
  }
};
