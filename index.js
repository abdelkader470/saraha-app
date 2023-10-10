import express from "express";
import { connection } from "./db/connection.js";
import userRoutes from "./modules/user/user.routes.js";
import massageRoutes from "./modules/massage/massage.routes.js";
const app = express();
app.use(express.json());
connection();
app.use(userRoutes);
app.use(massageRoutes);
const port = 7000;

app.get("/", (req, res) => res.send("Hello World!"));
app.listen(port, () => console.log(`Example app listening on port ${port}!`));
