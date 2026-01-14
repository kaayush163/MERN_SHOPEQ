const express = require("express");

const {
  addAddress,
  fetchAllAddress,
} = require("../../controllers/shop/address-controller");

const router = express.Router();

router.post("/add", addAddress);
router.get("/all/:userId", fetchAllAddress);

module.exports = router;
