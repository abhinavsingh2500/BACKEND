 const express=require('express');
 const cookieParser=require('cookie-parser');
const app=express();
app.use(cookieParser());
app.get('/',(req,res)=>{
    res.cookie("name","Abhinav")
    res.send('Cookie set!')
});

app.listen(3000, () => {
  console.log('Server is running on port 3000');

});