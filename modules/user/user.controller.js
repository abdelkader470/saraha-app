import userModel from "../../db/model/user.model.js";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
const signUp = async (req, res) => {
  try {
    let foundedUser = await userModel.findOne({ email: req.body.email });
    if (foundedUser) {
      res.status(409).json({ Msg: "Already Resgister" });
    } else {
      let hashedPassword = bcrypt.hashSync(req.body.password, 10);
      let addedUser = await userModel.insertMany({
        ...req.body,
        password: hashedPassword,
      });
      res.status(201).json({ addedUser });
    }
  } catch (error) {
    res.status(400).json({ Msg: "error", error });
  }
};

const signIn = async (req, res) => {
  let foundedUser = await userModel.findOne({ email: req.body.email });
  if (foundedUser) {
    let matched = bcrypt.compareSync(req.body.password, foundedUser.password);
    if (matched) {
      let token = jwt.sign({ id: foundedUser.id }, "cr7");
      res.status(200).json({ Msg: "login Successfully", token });
    } else {
      res.status(400).json({ Msg: "Wrong Password" });
    }
  } else {
    res.status(404).json({ Msg: "User Not Found, U Have To Resgister First" });
  }
};
const getAllUser = async (req, res) => {
  let allUser = await userModel.find({});
  res.json({ allUser });
};
export { signUp, getAllUser, signIn };
