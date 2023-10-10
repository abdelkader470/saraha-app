import express from "express";
import { signUp, getAllUser, signIn } from "./user.controller.js";
import validation from "../../middleware/validation.js";
import {
  signUpValidationSchema,
  signInValidationSchema,
} from "./user.validation.js";

const userRoutes = express.Router();

userRoutes.post("/user/signUp", validation(signUpValidationSchema), signUp);
userRoutes.post("/user/signIn", validation(signInValidationSchema), signIn);
userRoutes.get("/users", getAllUser);

export default userRoutes;
