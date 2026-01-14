const express = require("express");

const { addAddress } = require("../../controllers/shop/address-controller");

const router = express.Router();

router.post("/add", addAddress);

module.exports = router;
