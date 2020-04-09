const express = require("express");

const router = express.Router();

router.use(express.json());

router.get("/", (req, res) => {
  //READ
  const message = process.env.MESSAGE || "hello from localhost";

  //RETURN
  res.status(200).json({ api: "up", message });
});

module.exports = router;
