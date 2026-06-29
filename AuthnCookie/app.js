 const express = require('express');
const cookieParser = require('cookie-parser');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const app = express();

app.use(cookieParser());

app.get('/', (req, res) => {
 
  let token = jwt.sign({ name: 'Abhinav' }, 'secretkey', { expiresIn: '1h' });
  res.cookie('token', token);
  bcrypt.genSalt(10, (err, salt) => {
    

    bcrypt.hash('Abhinav', salt, (err, hash) => {
      if (err) throw err;
      console.log(hash);

      bcrypt.compare('Abhinav', hash, (err, result) => {
        if (err) throw err;
        console.log(result);
      });
    });
  });

  res.send('Cookie set!');
});
app.get("/read", (req, res) => {
    let data=jwt.verify(req.cookies.token, 'secretkey');
    res.send(data);
});

app.listen(3000, () => {
  console.log('Server is running on port 3000');
});