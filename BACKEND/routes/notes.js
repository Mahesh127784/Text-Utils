const express = require("express");
const router = express.Router();

router.get("/", (req, res) => {
  obj = {
    a: "this",
    Numb: 20,
  };
  res.json(obj);
});

module.exports = router;
