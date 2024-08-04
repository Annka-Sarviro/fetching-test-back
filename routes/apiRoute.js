const express = require("express");

const { api: ctrl } = require("../controllers");
const { rateLimiter } = require("../middleware");

const { asyncWrapper } = require("../helpers");

const router = express.Router();

router.post("/", rateLimiter, asyncWrapper(ctrl.postApiCTRL));

module.exports = router;
