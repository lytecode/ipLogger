const express = require("express");
const cors = require("cors");
const app = express();
const PORT = process.env.PORT || 5000;
const mongoose = require("mongoose");
const IpLogger = require("./IPLogger");

//connection to database
mongoose.connect(process.env.MongoDB_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});
const db = mongoose.connection;
db.on("connected", () => console.log("db connected successfully"));
db.on("error", () =>
  console.log("Ooops! Something went wrong with db connection")
);

app.use(cors());
app.use(express.json());

app.post("/", (req, res) => {
  console.log("Start logging req ...."); //(req);

  console.log({
    body: req.body,
    path: req.path,
    headers: req.headers,
    method: req.method,
    cookies: req.cookies,
    fresh: req.fresh,
    hostname: req.hostname,
    ip: req.ip,
    ips: req.ips,
    protocol: req.protocol,
    query: req.query,
    subdomains: req.subdomains,
    xhr: req.xhr,
  });

  const newIp = new IpLogger({
    ip: req.ip,
    ips: req.ips,
    "x-forwarded-for": req.headers["x-forwarded-for"],
  });

  newIp.save();

  res.json({ msg: "end logging....." });
});

app.listen(PORT, () => {
  console.log("App started on port 5000 ...");
});
