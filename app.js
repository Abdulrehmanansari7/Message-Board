import express from "express";
import dotenv from "dotenv/config";
import path from "path";
import { messages } from "./db.js";
import { deleteMsg } from "./db.js";
import newRouter from "./routes/newRouter.js";
import deleteRouter from "./routes/deleteRouter.js";

const app = express();
const PORT = process.env.PORT || 8080;
const __dirname = import.meta.dirname;

app.use(express.urlencoded({ extended: true }));
app.use(express.static("public"));
app.set("views", path.join(__dirname, "views"));
app.set("view engine", "ejs");

app.get("/", (req, res) => {
  res.render("index", { messages: messages });
});

app.use("/new", newRouter);
app.use("/delete", deleteRouter);
// app.use("/new",newRouter);

app.listen(PORT, () => {
  console.log(`SERVER is listening on ${PORT}`);
});
