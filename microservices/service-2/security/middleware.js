const helmet = require("./helmet-config");
const rateLimit = require("./rate-limit");

module.exports = (app) => {
  app.use(helmet);
  app.use(rateLimit);
};
