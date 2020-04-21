const express = require("express");
const cors = require("cors");
const axios = require("axios");
const dns = require("dns");

const app = express();
const PORT = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());

app.post("/", (req, res) => {
  console.log("Start logging req ...."); //(req);

  //   dns.lookup("https://goal.com", (err, address, family) => {
  //     if (err) throw err;
  //     //   console.log(`addresses: ${JSON.stringify(addresses)}`);
  //     console.log("address: %j family: IPv%s", address, family);
  //   });

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

  res.json({ msg: "end logging....." });
});

app.listen(PORT, () => {
  console.log("App started on port 5000 ...");
});
