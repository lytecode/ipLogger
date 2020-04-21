const express = require("express");
const cors = require("cors");

const app = express();
const PORT = process.env.PORT || 5000;

// app.use(cors());
app.use(express.json());

app.get("/", (req, res) => {
  console.log("Loging from logger endpoint"); //(req);
  res.json({ msg: "logging....." });
});

app.listen(PORT, () => {
  console.log("App started on port 5000 ...");
});
