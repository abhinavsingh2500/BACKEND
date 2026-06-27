 const express = require('express');
const cookieParser = require('cookie-parser');
const bcrypt = require('bcrypt');
const app = express();

app.use(cookieParser());

app.get('/', (req, res) => {
  res.cookie('name', 'Abhinav');

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

app.listen(3000, () => {
  console.log('Server is running on port 3000');
});