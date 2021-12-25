const { Router } = require('express');

const router = Router();

const { setLoggedInStatus } = require('../middlewares');

router.get('/', setLoggedInStatus, (req, res) => {
  res.render('index', { isLogined: req.isLoggedIn });
});

module.exports = router;
