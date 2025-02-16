const express = require("express");
const helmet = require("helmet");
const rateLimit = require("express-rate-limit");
const { DaprClient } = require("@dapr/dapr");

const app = express();
const PORT = 4000;

// Security Headers
app.use(helmet());

// Rate Limiting
const limiter = rateLimit({
  windowMs: 15 * 60 * 1000, // 15 minutes
  max: 100,
});
app.use(limiter);

const daprClient = new DaprClient();

// Sample Endpoint
app.get("/", async (req, res) => {
  res.send("Service-1 is running securely!");
});

app.listen(PORT, () => {
  console.log(`Service-1 listening on port ${PORT}`);
});
