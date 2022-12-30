const express = require("express");
const router = express.Router();

const Bill = require("../schema/billSchema");

router.post("/api/addBill", (req, res) => {
  const data = req.body;
  console.log(data);
  const bill = new Bill(data);
  bill.save((e) => {
    if (e) {
      res.json({
        status: "error",
      });
    } else {
      res.json({
        status: "success",
      });
    }
  });
});

router.get("/api/getbills", (req, res) => {
  Bill.find({}, (e, bills) => {
    if (e) {
      res.json({
        status: "error",
      });
    } else {
      res.json({
        status: "success",
        bills,
      });
    }
  });
});

router.delete("/api/delete/:id", (req, res) => {
  const id = req.params.id;
  console.log(id);
  Bill.findByIdAndDelete(id, (e) => {
    if (e) {
      res.json({
        status: "error",
      });
    } else {
      res.json({
        status: "success",
      });
    }
  });
});

router.put("/api/edit/:id", (req, res) => {
  const id = req.params.id;
  const data = req.body;
  Bill.findByIdAndUpdate(id, data, (e) => {
    if (e) {
      res.json({
        status: "error",
      });
    } else {
      res.json({
        status: "success",
      });
    }
  });
});

router.get("/api/edit/:id", (req, res) => {
  const id = req.params.id;
  Bill.findById(id, (e, bill) => {
    if (e) {
      res.json({
        status: "error",
      });
    } else {
      res.json({
        status: "success",
        bill,
      });
    }
  });
});


router.get("/", (req, res) => {
  res.send("Hey am from router");
});

module.exports = router;
