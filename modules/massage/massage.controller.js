import massageModel from "../../db/model/massage.model.js";
import jwt from "jsonwebtoken";
const addMassage = async (req, res) => {
  try {
    let { id } = req.params;
    let { title, messageContent } = req.body;

    let addedMassage = await massageModel.insertMany({
      title,
      messageContent,
      receivedId: id,
    });
    res.json({ addedMassage });
  } catch (error) {
    res.status(400).json({ Msg: "invalid token", error });
  }
};
const getAllMassage = async (req, res) => {
  let allMassage = await massageModel.find({}).populate("receivedId");
  res.json({ allMassage });
};
export { addMassage, getAllMassage };
