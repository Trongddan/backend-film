const mongoose = require("mongoose");
const UserSchema = new mongoose.Schema(
  {
    username: { type: String, minlength: 8, required: true, unique: true },
    password: { type: String, minlength: 8, required: true },
    admin: { type: Boolean, default: false },
    email: { type: String, required: true },
  },
  { timestamps: true }
);
module.exports = mongoose.model("user", UserSchema);
