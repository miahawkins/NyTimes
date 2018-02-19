var express = require('express');
var router = express.Router();

var Article = require('../models/Article');

router.get("/", function(req, res) {
    res.sendFile(process.cwd() + "/public/index.html");
})

//All the save Articles routing as follows..../////////////////
//get all saved articles
router.get("/api/saved", function(req, res) {
    Article.find({}, function(err, info) {
        if(err) {
            console.log(err);
        }else {
            res.json(info);
        }
    });
});

//to save an article to db
router.post("/api/saved", function(req, res) {
    Article.save(function(err, info) {
        if(err) {
            console.log(err);
        }else {
            console.log(info);
        }
    });
});

//to delete a saved article from db
router.post("/api/saved", function(req, res) {
    Article.findByIdAndRemove(req.params.articleID,function(err, info) {
        if(err) {
            console.log(err);
        }else {
            console.log(info);
        }
    });
});

// Export routes.
module.exports = router;