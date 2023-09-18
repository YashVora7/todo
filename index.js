const express = require("express")
const app=express()
app.use(express.json())

let initialTodo = [{title:html,isCompleted:true,id:1},{title:javascript,isCompleted:true,id:2},{title:React,isCompleted:false,id:3}]
 app.get("/",(req,res)=>{
    res.status(200).send("welcome to the todo api")
 });
 app.get("/todos",(req,res)=>{
    res.status(200).send(initialTodo)
});
app.post("/addtodo",(req,res)=>{
    console.log(req.body);
   res.status(200).send(req.body)
});


 app.listen(8090,()=>{
    console.log("Server Started");
 })