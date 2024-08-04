const requestCounts = {};
const WINDOW_SIZE_IN_SECONDS = 1;
const MAX_REQUESTS_PER_WINDOW = 50;

const rateLimiter = (req, res, next) => {
  const currentTime = Math.floor(Date.now() / 1000);
  const userIP = req.ip;

  if (!requestCounts[userIP]) {
    requestCounts[userIP] = [];
  }

  requestCounts[userIP] = requestCounts[userIP].filter(timestamp => timestamp > currentTime - WINDOW_SIZE_IN_SECONDS);

  if (requestCounts[userIP].length >= MAX_REQUESTS_PER_WINDOW) {
    return res.status(429).json({ error: "Too many requests" });
  }

  requestCounts[userIP].push(currentTime);
  next();
};

module.exports = rateLimiter;
