const express = require("express");
const bodyParser = require("body-parser");
const lodash = require("lodash");
const mongoose = require("mongoose");
const cors = require("cors");
const multer = require("multer");
const fs = require("fs");
const sharp = require("sharp");
const path = require("path");
const aws = require("aws-sdk");

aws.config.update({
  accessKeyId: "",
  secretAccessKey: "",
});

const app = express();
app.use("/static", express.static(path.join(__dirname, "static")));

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(cors());

mongoose.connect(
  "mongodb+srv://new-user_0:weqgid-siqwyh-xErwu3@cluster0-0bwlj.mongodb.net/test?retryWrites=true&w=majority",
  { useNewUrlParser: true, useUnifiedTopology: true }
);
console.log("Db connected");

const postsSchema = {
  banner: String,
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
      banner:req.body.banner,
    title: req.body.title,
    time: new Date().toLocaleString(),
    post: req.body.post,
  });
  newPost.save((err) => {
    if (!err) {
      res.send({ cool: "cool" });
    } else {
      console.log(err);
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
          post: post,
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

//image upload
const fileFilter = function(req, file, cb) {
  const allowedTypes = ["image/jpeg", "image/png", "image/gif"];

  if (!allowedTypes.includes(file.mimetype)) {
    const error = new Error("Wrong file type");
    error.code = "LIMIT_FILE_TYPES";
    return cb(error, false);
  }
  cb(null, true);
};
const MAX_SIZE = 100000000;
const upload = multer({
  dest: "./uploads/",
  fileFilter,
  limits: {
    fileSize: MAX_SIZE,
  },
});

app.post("/upload", upload.single("banner"), (req, res) => {
  console.log(req);
  res.json({ file: req.file });
});
app.post("/dropzone", upload.single("file"), async (req, res) => {
  const s3 = new aws.S3();
  const now = Date.now();

  try {
    const buffer = await sharp(req.file.path).toBuffer();

    const s3res = await s3
      .upload({
        Bucket: "blogvue-banner",
        Key: `${now}-${req.file.originalname}`,
        Body: buffer,
        ACL: "public-read",
      })
      .promise();

    fs.unlink(req.file.path, () => {
      res.json({ file: s3res.Location });
    });
  } catch (error) {
    console.log(error);
    res.status(422).json({ error });
  }
});

app.use((err, req, res, next) => {
  if (err.code === "LIMIT_FILE_TYPES") {
    res.status(422).json({ error: "Only images are allowed" });
    return;
  }

  if (err.code === "LIMIT_FILE_SIZE") {
    res
      .status(422)
      .json({ error: `Too large. Max size is ${MAX_SIZE / 1000}Kb` });
    return;
  }
});

app.listen(3000, function() {
  console.log("Server started on port 3000");
});
