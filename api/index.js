const app = require("../app.js");

module.exports = (req, res) => {
  app(req, res);
};

app.get("/", (req, res) => res.send("Express on Vercel"));

app.listen(3000, () => console.log("Server ready on port 3000."));

module.exports = app;
