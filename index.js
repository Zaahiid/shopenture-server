const dotenv = require("dotenv");
dotenv.config();
const express = require("express");
const app = express();
const port = process.env.PORT || 3000;

app.get("/", (req, res) => res.sendFile(__dirname + "/views/index.html"));

app.use((req, res, next) => {
  res.status(404).sendFile(__dirname + "/views/404.html");
});


app.listen(port, () =>
  console.log(`Shopenture server is listening on port ${port}! 😎`)
);
