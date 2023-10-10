import mongoose from "mongoose";

const massageSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      require: true,
    },
    messageContent: {
      type: String,
      require: true,
    },
    receivedId: {
      type: mongoose.Types.ObjectId,
      ref: "User",
    },
  },
  { timestamps: true }
);
const massageModel = mongoose.model("Massage", massageSchema);
export default massageModel;
