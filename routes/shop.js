const express = require("express");
const router = express.Router();
const shopController = require("../controllers/shop");

//get request to fetch book data
router.get("/get-books", shopController.getBooks);

module.exports = router;
