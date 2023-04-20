const express = require("express");
const mongoose = require("mongoose");
const app = express();
const Port = 3030;
const Http_req = require("./Request_Handlers/Http_req");
const bodyParser = require("body-parser");

// connection string
const Url = `mongodb+srv://ashutosh_shinde:GH14nVRE4pRSITj9@cluster0.ffixaew.mongodb.net/API?retryWrites=true&w=majority`;

app.use(bodyParser.json());
app.use("/api", Http_req);

mongoose.connect(Url, {
  useUnifiedTopology: true,
  useNewUrlParser: true,
});

// Creating Server
app.get("/", (req, res) => {
  res.send(`connected to server !!`);
  res.end();
});

app.listen(Port, (req, res) => {
  console.log(`Connected to mongoDB on Port ${Port}`);
});
