const express = require("express");

const router = express.Router();

router.use(express.json());

router.get("/", (req, res) => {
  data = {aja: 'hello'}
  res.status(200).json({data})
})

router.get("/info", (req, res) => {
  data= req.body
  res.status(200).json({data});
})


module.exports = router;
