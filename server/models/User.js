const mongoose = require("mongoose");
const { Schema } = mongoose;

const userSchema = new Schema({
  googleId: String,
  name: String,
  photo: String,
  credits: { type: Number, default: 0 }
});

mongoose.model("users", userSchema);
