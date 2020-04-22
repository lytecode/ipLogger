const mongoose = require("mongoose");

const IPSchema = new mongoose.Schema({
  ip: String,
  ips: Array,
  "x-forwarded-for": String,
});

const IpLogger = mongoose.model("IpLogger", IPSchema);

module.exports = IpLogger;
