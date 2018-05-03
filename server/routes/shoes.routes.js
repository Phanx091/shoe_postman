const express = require("express");
const router = require("express").Router();

const shoesList = [
  {
    name: "Nike Roshe Run",
    cost: 127
  },
  {
    name: "Nike Huarache",
    cost: 148
  },
  {
    name: "Converse Chuck Taylor low",
    cost: 32
  }
];

// router.GET
router.get("/", (req, res) => {
  console.log("router get", req.body);
  res.send(shoesList);
});

router.post("/", (req, res) => {
  console.log("router get", req.body);
  shoesList.push(req.body);
  res.send(shoesList);
});
module.exports = router;
