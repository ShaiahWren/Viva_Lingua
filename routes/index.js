const express = require("express");
const router = express.Router();

router.get("/", (req, res) => {
    res.render("template", {
        locals: {
            title: "Home Page",
            is_logged_in: req.session.is_logged_in
        },
        partials: {
            partial: "partial-login"
        }
    });
});

router.get("/about", (req, res) => {
    res.render("template", {
        locals: {
            title: "",
            is_logged_in: req.session.is_logged_in
        },
        partials: {
            partial: "partial-about"
        }
    });
});



router.get("/", (req, res) => {
    res.render("template", {
        locals: {
            title: "Languages",
            is_logged_in: req.session.is_logged_in
        },
        partials: {
            partial: "partial-languages"
        }
    });
});








module.exports = router;