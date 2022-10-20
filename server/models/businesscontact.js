// user model using passport local
let mongoose = require("mongoose");

let Businesscontact = mongoose.Schema(
  {
    name : {
      type: String,
      default: "",
      trim: true,
      required: "name is required",
    },
    contact_number : {
      type: String,
      default: "",
      trim: true,
      required: "contact number is required",
    },
    email: {
      type: String,
      default: "",
      trim: true,
      required: "email is required",
    },
    
    created: {
      type: Date,
      default: Date.now,
    },
    update: {
      type: Date,
      default: Date.now,
    },
  },
  {
    collection: "businesscontacts",
  }
);


module.exports = mongoose.model("businesscontact", Businesscontact);
