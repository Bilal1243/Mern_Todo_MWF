import express from "express";
import connectDb from "./config/db.js";
import Todos from './models/todoModel.js'

const app = express();

let port = 3000;

connectDb()

// app.httpMethod('url' , handler)

app.use(express.json()) // parses incoming requests with json , adds a 'body' property to the request object (req.body)
app.use(express.urlencoded({extended : true}))

app.post("/create-todo", async(req, res) => {

  const {title , description} = req.body
  
  let todo = await Todos.create({
    title,
    description
  })

  res.json(todo)

});

app.get('/get-Todos',async(req,res)=>{

  let todos = await Todos.find()

  res.json(todos)

})


app.listen(port, () => console.log("server started"));
