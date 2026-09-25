import express from "express";
import {postMsg} from "../controllers/userControllers.js";
import {removeMsg} from "../controllers/userControllers.js";

const newRouter = express.Router();

newRouter.get("/", (req, res) => {
  res.render("form");
});

newRouter.post("/post", postMsg);
newRouter.post("/delete/:id", removeMsg);

export default newRouter;
