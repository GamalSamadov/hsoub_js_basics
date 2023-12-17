const mongoose = require("mongoose");

const ModelSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    maxlength: 20,
  },
  email: {
    type: String,
    required: true,
    maxlength: 20,
  },
  password: {
    type: String,
    required: true,
    maxlength: 20,
  },
});

const Model = mongoose.Model("User", ModelSchema);

module.exports = Module;
