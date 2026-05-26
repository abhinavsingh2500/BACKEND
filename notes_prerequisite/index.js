const express=require('express');
const app=express();
const path= require('path');
app.use(express.json());
app.use(express.urlencoded({extended :true}));
app.use(express.static(path.join(__dirname,'public')));
app.set("view engine", "ejs");
app.get("/",function(req,res){
    res.render("view");
});
app.get("/profile/:username/:age",(req,res)=>{res.send(`hey this is ${req.params.username} and I am ${req.params.age}`)});
app.listen(3000,function(){
    console.log("server is running on port 3000");
}); 