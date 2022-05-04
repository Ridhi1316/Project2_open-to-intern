const mongoose = require("mongoose");
const validator = require("validator");
const ObjectId=mongoose.Schema.type.ObjectId;

const internModel = new mongoose.Schema(
  {
    name: { type: String, required: true,trim:true },
    email: { type: String, unique: true, validate:{
      validator: validator.isEmail,
      message: `${VALUE} is not a valid email`,
      isAsync: false
    }},
    mobile: { type: Number,unique:true ,required: true, validate:{
      validator: validator.mobile,
      message: `${VALUE} is not a valid mobile`,
      isAsync: false
    }},
    collegeId:{
      type:ObjectId,ref:"college"
    },
    isDeleted: { type: Boolean, default: false },
  },
  { timestamps: true }
);

module.exports = mongoose.model("intern", internModel);

/*{ name: {mandatory}, email: {mandatory, valid email, unique}, 
mobile: {mandatory, valid mobile number, unique}, collegeId: {ObjectId, ref to college model, isDeleted: {boolean, default: false}} */
