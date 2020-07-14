const express = require("express");
const User = require("../models/user");

const router = new express.Router();

router.get("", (req, res) => {
     res.send('Working!')
});