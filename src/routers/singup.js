const express = require("express");
const User = require("../models/users");
const router = new express.Router();

router.get("", (req, res) => {
    res.send('Working!')
});

module.exports = router;
