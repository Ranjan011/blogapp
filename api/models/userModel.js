import exp from "constants";
import mongoose from "mongoose";

const userSchema = new mongoose.Schema(
  {
    username: {
      type: String,
      required: true,
      unique: true,
    },
    email: {
      type: String,
      required: true,
      unique: true,
    },
    password: {
      type: String,
      required: true,
    },
    profilePicture: {
      type: String,
      default: "https://www.google.com/url?sa=i&url=https%3A%2F%2Fpixabay.com%2Fillustrations%2Ficon-profile-user-clip-art-7797704%2F&psig=AOvVaw0K66040soSZ-nRv3kC6ogl&ust=1709206382133000&source=images&cd=vfe&opi=89978449&ved=0CBMQjRxqFwoTCMiyk4z4zYQDFQAAAAAdAAAAABAE",
    },
  },
  { timestamps: true }
);

const User = mongoose.model("User", userSchema);

export default User;
