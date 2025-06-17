const Limiter = require("express-rate-limit");

const ApiLimiter = Limiter({
  windowMs: 15 * 60 * 1000,
  max: 20,
  message: {
    status: 429,
    error: "too many requests",
  },
});

module.exports = ApiLimiter;
