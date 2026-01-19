const express = require("express");

const {
  addAddress,
  fetchAllAddress,
  editAddress,
} = require("../../controllers/shop/address-controller");

const router = express.Router();

router.post("/add", addAddress);
router.get("/all/:userId", fetchAllAddress);
router.put("/update/:userId/:addressId", editAddress);

module.exports = router;
