module.exports = {
    apps : [{
      name: "TRANSPORT API",
      script: "./server.js",
      env: {
        NODE_ENV: "development",
      },
      env_production: {
        NODE_ENV: "production",
      }
    }]
  }