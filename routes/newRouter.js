import express from "express";
import { messages } from "../db.js";

const newRouter = express.Router();

newRouter.get("/", (req, res) => {
  res.render("form");
});

newRouter.post("/post", (req, res) => {
  const userA = req.body.authorName;
  const textA = req.body.authorText;

  messages.push({
    id: crypto.randomUUID(),
    text: textA,
    user: userA,
    added: new Date(),
  });

  res.redirect("/");
});



export default newRouter;
