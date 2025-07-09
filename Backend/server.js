import express from "express";
import connectDb from "./config/db.js";

const app = express();

let port = 3000;

connectDb()

// app.httpMethod('url' , handler)

app.use(express.json()) // parses incoming requests with json , adds a 'body' property to the request object (req.body)
app.use(express.urlencoded({extended : true}))

app.post("/create-todo", (req, res) => {
  console.log(req.body)
});


app.listen(port, () => console.log("server started"));
