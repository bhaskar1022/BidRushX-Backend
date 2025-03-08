const mongoose = require("mongoose");

// User Schema
const userSchema = new mongoose.Schema({
    username: { type: String, required: true},
    email:{type:String,required:true, unique:true},
    password: { type: String, required: true },
  });
  /* create table user (username char(10) notnull unique) */
const User = mongoose.model('User', userSchema);

module.exports = User;