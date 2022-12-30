const mongoose = require("mongoose");

const billSchema = new mongoose.Schema(
  {
    billdate: {
      type: String,
      required: true,
    },
    paiddate: {
      type: String,
      required: true,
    },
    unitconsume: {
      type: Number,
      required: true,
    },
    amount: {
      type: Number,
      required: true,
    },
  },
  { timestamps: true }
);

const Bill = mongoose.model("Bill", billSchema);
module.exports = Bill;
