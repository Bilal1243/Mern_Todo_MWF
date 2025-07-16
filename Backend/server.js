import express from "express";
import connectDb from "./config/db.js";
import todoRoute from "./routes/todoRoutes.js";

const app = express();

let port = 3000;

connectDb()

// app.httpMethod('url' , handler)

app.use(express.json()) // parses incoming requests with json , adds a 'body' property to the request object (req.body)
app.use(express.urlencoded({extended : true}))


// http:localhost:3000/api/todos
app.use('/api/todos' , todoRoute)


app.listen(port, () => console.log("server started"));
