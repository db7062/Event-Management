const express= require('express');
const app= express();

const Port= 8000;
const customMiddleware = (req,res,next)=>{
    console.log("Middleware executed");
    next()
}
app.use(customMiddleware);
app.get('/',customMiddleware,(req,res)=>{
    console.log("Home");
    //console.log("Home");
    res.send("Hello World");
})

app.listen(Port,()=>{
    console.log("Server is running on port",Port);
})