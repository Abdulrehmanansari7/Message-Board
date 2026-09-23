import express from "express";
import { deleteMsg } from "../db.js";

const deleteRouter = express.Router()

deleteRouter.post("/:id", (req, res) => {
  const id = req.params.id;
  deleteMsg(id);
  res.redirect("/");
});

export default deleteRouter