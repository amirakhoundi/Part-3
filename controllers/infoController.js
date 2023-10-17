const moment = require("moment");
let requestCount = 0;
const info = (req, res) => {
  requestCount++;

  const date = moment().format("ddd MMM DD YYYY HH:mm:ss [GMT]ZZ")+" (Eastern European Standard Time)";

  const message = "<p> Phonebook has info for " + requestCount + " people</p> " + date;
  res.send(message);
};

module.exports = info;

