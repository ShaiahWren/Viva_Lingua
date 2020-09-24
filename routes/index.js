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
            title: "About the Project",
            is_logged_in: req.session.is_logged_in
        },
        partials: {
            partial: "partial-about"
        }
    });
});








module.exports = router;