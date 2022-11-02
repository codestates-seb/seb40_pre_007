/*eslint-disable*/

const { createProxyMiddleware } = require("http-proxy-middleware");

module.exports = function (app) {
  app.use(
    createProxyMiddleware("/api", {
      target: "http://ec2-3-34-19-99.ap-northeast-2.compute.amazonaws.com:8080",
      changeOrigin: true,
    })
  );
};
