const express=require('express');
const app=express();
const path =require('path');
const fs=require('fs');
app.use(express.json());
app.use(express.urlencoded({extended:true}));
app.set("view engine","ejs");
app.use(express.static(path.join(__dirname,"..",  "notes_ka_maal")));

// Create documents folder if it doesn't exist
if (!fs.existsSync('./documents')){
    fs.mkdirSync('./documents');
}

app.get("/",function(req,res){
    fs.readdir('./documents',function(err,files){
        if(err){
            res.render("notes",{documents: []});
        } else {
            res.render("notes",{documents: files});
        }
    });
});
app.get('/notes/:noteName', function(req,res){fs.readFile(`./documents/${req.params.noteName}`, 'utf8', function(err, data){
    if(err){
        res.send("Note not found"); 
    } else {
        res.send(data);
    }
});});

app.post("/add-note", function(req,res){
    let title = req.body.title;
    let content = req.body.content;
    fs.writeFile(`./documents/${title}.txt`, content, function(err){
        if(err){
            console.log(err);
        }
        res.redirect("/");
    });
});

app.listen(3000,()=>{console.log("notes  is running on port 3000")});

