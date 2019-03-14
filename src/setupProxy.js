const proxy = require("http-proxy-middleware");
 
module.exports = function(app) {
  app.use(
    proxy("/wei", {
      target: "http://101.132.193.122:3000",
      changeOrigin: true,
			pathRewrite: { 
				'^/wei': ''
			}
    })
  );
};

