const express=require('express');
const app=express();

app.get("/", function(req,res){
    res.send("he he he ");
});
  

app.get("/profile", function(req,res){
    res.send("Abhinav's  profile");
});
 
app.get("/about", (req,res,next)=>{
    return next(new Error("daal m kuchh kala hai daya"));
    
});

app.get("/contact", (req,res)=>{
    res.send("contact me at abhinav@example.com");
});


app.use((err, req, res, next) => {
    console.error(err.stack);
    res.status(500).send("2 min ruko abhi thik krke deta hu");
});

app.listen(3000);