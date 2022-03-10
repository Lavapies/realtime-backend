const { Schema, model } = require("mongoose");

const postSchema = new Schema(
  {
    message: String
  },

);

const Post = model("Post", postSchema);

module.exports = Post;
