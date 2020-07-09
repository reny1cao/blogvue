const express = require("express");
const bodyParser = require("body-parser");
const lodash = require("lodash");
const mongoose = require("mongoose");
const cors = require('cors');

const app = express();

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json())
app.use(cors());

mongoose.connect(
  "mongodb+srv://new-user_0:weqgid-siqwyh-xErwu3@cluster0-0bwlj.mongodb.net/test?retryWrites=true&w=majority",
  { useNewUrlParser: true, useUnifiedTopology: true }
);
console.log("Db connected");

const postsSchema = {
  title: String,
  time: String,
  post: String,
};

const Post = mongoose.model("Post", postsSchema);

app.get("/", (req, res) => {
    Post.find({}, function(err, foundPosts) {
      res.send(foundPosts);
    });
  });


  app.post("/compose", (req, res) => {
    let newPost = new Post({
      title: req.body.title,
      time: new Date().toLocaleString(),
      post: req.body.post
    });
    newPost.save((err)=>{
      if (!err) {
      
      }
    });
  });
  
  app.get("/posts/:postName", (req, res) => {
    let postName = lodash.lowerCase(req.params.postName);
  
    Post.find({}, function(err, foundPosts) {
      foundPosts.forEach((element) => {
        let title = lodash.lowerCase(element.title);
        let post = element.post;
        if (title === postName) {
          res.render("post", {
            title: title,
            post: post
          });
        }
      });
    });
  });

  app.delete("/posts/:id", (req, res) => {
    const id = req.params.id;
    Post.findByIdAndDelete(id)
      .then((post) => {
        if (!post) {
          res.status(404).send();
        } else {
          res.send(post);
        }
      })
      .catch((err) => {
        res.status(500).send();
      });
  });
  
  app.listen(3000, function() {
    console.log("Server started on port 3000");
  });
  