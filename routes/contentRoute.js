const express = require("express");
const router = express.Router();


const PostsModel = require("../models/contentModel");


router.get("/", (req, res) => {
    res.render("template", {
      locals: {
        title: "Post a LangSource",
        is_logged_in: req.session.is_logged_in
      },
      partials: {
        partial: "partial-uploads",
      },
    });
  });




router.get("/content", async function (req, res, next) {
    //const data = await contentModel.getAll();
  
    res.render("template", {
      locals: {
        title: "VivaLingua",
       // data: data,
      },
      partials: {
        partial: "partial-maincontent",
      },
    });
  });

  router.post("/", async function (req, res) {
      const { user_id } = req.session;
    const { title, description, language, type, filename } = req.body;
    const newId = parseInt(user_id);
  
    const uploadData = await PostsModel.postData(
      newId,
      title,
      description,
      language,
      type,
      filename
    );
    console.log(uploadData);
    console.log(req.body, req.files)

    res.sendStatus(200);
  });





module.exports = router; 