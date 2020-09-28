'use strict'
const express = require("express");
const router = express.Router();
const fs = require("fs");
const multer = require("multer");
const storage = multer.diskStorage({
  destination: function(req, file, cb) {
      cb(null, 'media/');
  },
  filename: function(req, file, cb) {
      cb(null, file.fieldname + '-' + Date.now() + path.extname(file.originalname));
  }
});
const path = require("path");
const PostsModel = require("../models/contentModel");


router.get("/", (req, res) => {
    console.log("1st req.session: ", req.session);
    res.render("template", {
      locals: {
        title: "CREATE POST",
        is_logged_in: req.session.is_logged_in
      },
      partials: {
        partial: "partial-uploads",
      },
    });
  });




router.get("/content", async function (req, res, next) {
    const postsData = await PostsModel.getAllPosts();
  
    res.render("template", {
      locals: {
        title: "VivaLingua",
        data: postsData,
      },
      partials: {
        partial: "partial-maincontent",
      },
    });
  });


  router.get("/languages", async function (req, res) {
    const postsData = await PostsModel.getDynLang();
    console.log("DYN POSTTTTS DATA: ", postsData)
    res.render("template", {
        locals: {
            title: "Languages",
            data: postsData,
            is_logged_in: req.session.is_logged_in
        },
        partials: {
            partial: "partial-languages"
        }
    });
});
  // router.get("/languages", async function (req, res) {
  //   const { language } = req.body;
  //   console.log("REQ BODY IS", req.body);
  //   const postsData = await PostsModel.getDynLang(language);
  //   console.log("DYN POSTTTTS DATA: ", postsData)
  //   res.render("template", {
  //       locals: {
  //           title: "Languages",
  //           data: postsData,
  //           is_logged_in: req.session.is_logged_in
  //       },
  //       partials: {
  //           partial: "partial-languages"
  //       }
  //   });
  // });

  router.post("/", async function (req, res) {
      const { user_id } = req.session;
    console.log("req session is: ", req.session)
    const { title, description, language, type } = req.body;
    const newId = parseInt(user_id);
    // let upload = multer({storage: storage}).single('filename');
    //   upload(req, res, function(err) {
    //     if (err) {
    //       console.log("callback error: ", err);
    //       return err;
    //     }
    //     res.send(`You have uploaded this file: <img src="${req.filename.path}"`)
    //   })
    const uploadData = await PostsModel.postData(
      newId,
      title,
      description,
      language,
      type,
      req.files.filename.name
    );
    // console.log("REQ FILES ARE: ", req)
    // fs.copyFile(`${req.files.filename.path}`, `/Users/dylancooper/Desktop/DigitalCrafts/VivaLingua/VivaLingua/public/media/3${req.files.filename.name}`, (error) => {
    //   if (error)
    //   //console.log("TEST ERROR; ", error);
    //    throw error;  
      
    // });
 

    res.redirect('/uploads/content');
  });





module.exports = router; 