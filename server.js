const express = require("express");

const db = require("./db");

const app = express();
app.use(express.json());

app.get("/", (req, res) => {
  res.send("sever working" + port);
});

const port = process.env.PORT || 5000;

app.listen(port, () => "server running on port ");
