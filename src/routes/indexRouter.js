const { Router } = require("express");

const router = Router();

const { setLoggedInStatus } = require("../middlewares");

router.get("/", setLoggedInStatus, (req, res) => {
  res.render("../public/views/index.html", { isLogined: req.isLoggedIn });
});

module.exports = router;
