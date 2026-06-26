const express = require('express');
const app = express();
const path = require('path');
const usermodel = require('./models/user');
app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, 'public')));
app.get("/",(req,res)=>{res.render("index")});
app.get("/read",async(req,res)=>{
   let users = await usermodel.find();
    res.render("read", { users });
});
app.post("/create", async (req,res)=>{
    let { username, email, image } = req.body;
    const createdUser = await usermodel.create({
        username: username,
        email: email,
        image: image
    });
    // log and send back the created document so client can confirm
    console.log(createdUser);
    res.send(createdUser);
});
app.get("/delete/:id", async (req, res) => {
    const userId = req.params.id;
    const deletedUser = await usermodel.findByIdAndDelete(userId);
    console.log(deletedUser);
    res.redirect("/read");
});
app.get("/edit/:id", async (req, res) => {
    const userId = req.params.id;
    const user = await usermodel.findOne({_id: req.params.id});
    res.render("edit", { user });
});
app.post("/update/:id", async (req, res) => {
    let { image, username, email } = req.body;
    let user = await usermodel.findOneAndUpdate(
        { _id: req.params.id },
        { username: username, email: email, image: image },
        { new: true }
    );
    res.redirect("/read");
});
app.listen(3000,()=>{console.log("database and EJS rendering is running on port 3000")});