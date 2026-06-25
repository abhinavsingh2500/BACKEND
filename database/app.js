const express=require('express');
const app=express();
const usermodel=require('./usermodel');
app.use(express.json());
app.use(express.urlencoded({extended:true}));
app.get("/",(req,res)=>{res.send("Welcome to the database")});
app.get("/create",async(req,res)=>{
  let createdUser = await usermodel.create({
        name:"Abhinav",
        username:"abhinav123",
        email:"abhinav@example.com"
    })
    res.send(createdUser);
});
app.get("/read",async(req,res)=>{
  let usertoread = await usermodel.find({});
    res.send(usertoread);
});
app.get("/update",async(req,res)=>{let usertoupdate=await
    usermodel.findOneAndUpdate({username:"abhinav123"},{name:"Abhinav Singh", email:"abhinav.updated@example.com"},{new:true});
         
    res.send(usertoupdate);
});
app.get("/delete",async(req,res)=>{
    let usertodelete=await usermodel.findOneAndDelete({username:"abhinav123"});
    res.send(usertodelete);
});

app.listen(3001,()=>{console.log("database is running on port 3001")});
