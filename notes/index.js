const express=require('express');
const app=express();
const path =require('path');
app.use(express.json());
app.use(express.urlencoded({extended:true}));
app.set("view engine","ejs");
app.use(express.static(path.join(__dirname,"..","notes_ka_maal")));
app.get("/",function(req,res){
    res.render("notes");
});
app.listen(3000,()=>{console.log("notes  is running on port 3000")});