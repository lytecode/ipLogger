const express = require("express");
const cors = require("cors");

const app = express();

app.use(cors());
app.use(express.json());

app.get("/", (req, res) => {
  console.log("Loging from logger endpoint"); //(req);
  res.json({ msg: "logging....." });
});

app.listen(5000, () => {
  console.log("App started on port 5000 ...");
});
