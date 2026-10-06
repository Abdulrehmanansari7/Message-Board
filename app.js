import express from "express";
import dotenv from "dotenv/config";
import path from "path";
import { messages } from "./db.js";
import newRouter from "./routes/newRouter.js";


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
app.use((error,req,res,next) =>{
  console.log(error.message);
  res.status(500).end(error.message);
})

app.listen(PORT, "0.0.0.0",() => {
  console.log(`SERVER is listening on ${PORT}`);
});
