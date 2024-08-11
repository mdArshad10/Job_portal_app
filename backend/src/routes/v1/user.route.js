const { Router } = require("express");

const router = Router();

router.get("/test", (req, res, next) => {
  res.status(200).json({
    message: "this is for testing",
    data: null,
    success: true,
    error: null,
  });
});

module.exports = router;
