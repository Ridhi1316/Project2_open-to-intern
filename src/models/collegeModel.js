const { links } = require("express/lib/response");
const mongoose = require("mongoose");

const collegeModel = new mongoose.Schema(
  {
    name: { type: String, required: true,unique:true },
    fullName: { type: String, required: true },
    logoLink: { type: String, required: true },
    isDeleted: { type: Boolean, default: false },
  },
  { timestamps: true }
);

module.exports = mongoose.model("college", collegeModel);

/*{ name: { mandatory, unique, example iith}, fullName: {mandatory, example `Indian Institute of Technology, Hyderabad`}, logoLink: {mandatory}, isDeleted: {boolean, default: false} }
 */