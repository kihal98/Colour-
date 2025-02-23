const express = require("express");
const app = express();

app.get("/", (req, res) => {
  res.send("Bot is running!");
});

function keepAlive() {
  app.listen(6000, () => {
    console.log("Server is ready.");
  });
}

module.exports = keepAlive;