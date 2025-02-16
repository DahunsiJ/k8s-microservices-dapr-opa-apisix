const daprHost = process.env.DAPR_HOST || "localhost";
const daprPort = process.env.DAPR_PORT || 3501;

module.exports = {
  daprHost,
  daprPort,
};
