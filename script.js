const express=require('express');
const app=express();

app.get("/", function(req,res){
    res.send("he he he ");
})

app.get("/profile", function(req,res){
    res.send("Abhinav'sprofile");
})

app.listen(3000);