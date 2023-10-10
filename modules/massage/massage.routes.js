import express from "express";
import { addMassage, getAllMassage } from "./massage.controller.js";
import auth from "../../middleware/auth.js";

const massageRoutes = express.Router();

massageRoutes.post("/addMassage/:id", auth, addMassage);
massageRoutes.get("/allMassages", auth, getAllMassage);

export default massageRoutes;
