import mongoose from "mongoose";

export const connection = () => {
  mongoose
    .connect("mongodb://127.0.0.1:27017/sarahahDB")
    .then(() => {
      console.log("DB connected");
    })
    .catch((err) => {
      console.log("Error", err);
    });
};
