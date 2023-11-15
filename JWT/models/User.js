const mongoose = require("mongoose");
const { model, Schema } = require("mongoose");
const bcrypt = require("bcrypt");

const userSchema = new Schema({
  fullname: String,
  username: String,
  password: String,
});

userSchema.pre("save", async function (next) {
  const salt = await bcrypt.genSalt();
  this.password = await bcrypt.hash(this.password, salt);
  next();
});

userSchema.statics.login = async function (username, password) {
  const user = await this.findOne({ username });
  console.log(user);
  if (user) {
    const auth = await bcrypt.compare(password, user.password);
    if (auth) {
      console.log(auth);
      return user;
    }
    throw { message: "Invalid Password" };
  }
  throw { message: "Incorrect User Name" };
};

exports.User = model("User", userSchema);
