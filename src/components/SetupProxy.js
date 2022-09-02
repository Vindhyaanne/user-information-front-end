const proxy = require("http-proxy-middleware")

module.exports = function(app) {
    app.use(
        proxy("/users/getAll", {
          target:"https://09ff-2601-646-8200-dc0-d107-8bc4-2cc3-6e91.ngrok.io",
          changeOrigin:true
        })
      );
}