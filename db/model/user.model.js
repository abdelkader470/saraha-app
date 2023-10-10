import mongoose, { Schema } from "mongoose";

const userSchema = new Schema(
  {
    userName: {
      type: String,
      minLength: [3, "Min length is 3"],
      MaxLength: [10, "Max length is 10"],
    },
    email: {
      type: String,
      require: true,
      unique: true,
    },
    password: {
      type: String,
      require: true,
    },
    phone: String,
  },
  {
    timestamps: true,
  }
);
const userModel = mongoose.model("User", userSchema);
export default userModel;
