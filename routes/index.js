const router = require("express").Router();
const isLoggedIn = require("../middlewares");

/* GET home page */
router.get("/", (req, res, next) => {
  const user = req.session.currentUser;
  res.render("index", { title: 'Express', user});
});

/*GET main page*/
router.get("/main", isLoggedIn, (req, res, next) => {
  const user = req.session.currentUser;
  res.render("main", {user});
});

/* GET private page */
router.get("/private", isLoggedIn, (req, res, next) => {
  const user = req.session.currentUser;
  res.render("private", {user});
});

module.exports = router;
