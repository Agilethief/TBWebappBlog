var express = require("express");
var router = express.Router();

// GET home page
router.use(
  express.static("backend/tbwebappbackend/react_build/dist")
);

/* GET home page. */
//router.get("/", function (req, res, next) {
//res.render("index", { title: "Express Index" });
//});

module.exports = router;
