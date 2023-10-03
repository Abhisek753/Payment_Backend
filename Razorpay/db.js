const mongoose = require("mongoose");
require("dotenv").config();

const connection = mongoose.connect(process.env.MONGO_URL, {
  bufferCommands: false, 
  useNewUrlParser: true,
  useUnifiedTopology: true,
});
module.exports = {
  connection,
};
