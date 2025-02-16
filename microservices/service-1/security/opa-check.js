const axios = require("axios");

async function checkPolicy(req, res, next) {
  const policyCheck = await axios.post("http://opa:8181/v1/data/service-1/policy", {
    input: req.body,
  });

  if (!policyCheck.data.result.allow) {
    return res.status(403).json({ error: "Access denied by OPA policy" });
  }
  next();
}

module.exports = checkPolicy;
