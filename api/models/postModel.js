import mongoose from "mongoose";

const postSchema = new mongoose.Schema(
  {
    userId: {
      type: String,
      required: true,
    },
    content: {
      type: String,
      required: true,
    },
    title: {
      type: String,
      required: true,
      unique: true,
    },
    image: {
      type: String,
      default:
        "https://www.google.com/url?sa=i&url=https%3A%2F%2Fpixabay.com%2Fillustrations%2Ficon-profile-user-clip-art-7797704%2F&psig=AOvVaw0K66040soSZ-nRv3kC6ogl&ust=1709206382133000&source=images&cd=vfe&opi=89978449&ved=0CBMQjRxqFwoTCMiyk4z4zYQDFQAAAAAdAAAAABAE",
    },
    category: {
      type: String,
      default: "uncategorized",
    },
    slug: {
      type: String,
      required: true,
      unique: true,
    },
  },
  { timestamps: true }
);

const Post = mongoose.model("Post", postSchema);

export default Post;
