var express = require("express");
var router = express.Router();

/* GET home page. */
router.get("/index", function (req, res, next) {
  res.render("index", { title: "Home" });
});

/* GET home page. */
router.get("/Aboutme", function (req, res, next) {
  res.render("Aboutme", { title: "About Me" });
});

/* GET Products page. */
router.get("/Projects", function (req, res, next) {
  res.render("Projects", { title: "Products" });
});

/* GET Services page. */
router.get("/Services", function (req, res, next) {
  res.render("Services", { title: "Services" });
});

/* GET About page. */
router.get("/Home", function (req, res, next) {
  res.render("index", { title: "Home" });
});

/* GET Contact page. */
router.get("/Contact", function (req, res, next) {
  res.render("Contact", { title: "Contact" });
});

module.exports = router;
