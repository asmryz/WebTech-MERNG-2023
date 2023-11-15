const mongoose = require("mongoose");
const { User } = require("./User");

(async () => {
  await mongoose.connect(`mongodb://127.0.0.1:27017/authenticate`);
})();

module.exports = {
  User,
};
