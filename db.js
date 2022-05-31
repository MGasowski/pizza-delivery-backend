const mongoose = require("mongoose");

var mongoURL = `mongodb+srv://admin:zaq1WSX@cluster0.pfapl.mongodb.net/mern-pizza?retryWrites=true&w=majority`;

mongoose.connect(mongoURL, { useUnifiedTopology: true, useNewUrlParser: true });

var db = mongoose.connection;

db.on("connected", () => {
  console.log("Db connected");
});

db.on("error", () => {
  console.log("db connection failed");
});

module.exports = mongoose;
