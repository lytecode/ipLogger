const express = require("express");
const cors = require("cors");

const app = express();

app.use(cors());
app.use(express.json());

app.get("/logger", (req, res) => {
  console.log(req);
  res.send("logging.....");
});

app.listen(5000, () => {
  console.log("App started on port 5000 ...");
});
