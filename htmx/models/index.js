const mongoose = require("mongoose");

(async () => {
  await mongoose.connect(`mongodb://127.0.0.1:27017/recapsheet`);
})();

module.exports = {
  Course: require("./Course"),
};