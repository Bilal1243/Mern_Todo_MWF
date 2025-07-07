import express from "express";
import connectDb from "./config/db.js";

const app = express();

let port = 3000;

connectDb()

// app.httpMethod('url' , handler)

app.get("/", (req, res) => {
  res.send("haiiii");
});

app.get("/users", (req, res) => {
  res.send("users");
});

app.listen(port, () => console.log("server started"));
