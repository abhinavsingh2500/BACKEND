const mongoose=require('mongoose');
mongoose.connect("mongodb://localhost:27017/Userdatabase");
const userSchema=mongoose.Schema({
    username:String,
    email:String,
    image:String
});
module.exports=mongoose.model("user",userSchema);