const mongoose = require("mongoose");

const IPSchema = new mongoose.Schema({
  ip: String,
  ips: Array,
});

const IpLogger = mongoose.model("IpLogger", IPSchema);

module.exports = IpLogger;
