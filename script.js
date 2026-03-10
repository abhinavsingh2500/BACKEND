const fs = require('fs');
/*fs.writeFile('Abhinav.txt', 'I am Abhinav', function(err) {
     if(err){
         console.error(err);
     }
     else{
         console.log('done successfully');
     }
 });*/


 /*fs.appendFile('Abhinav.txt', ' and I am a curious guy', function(err){
    if (err){
        console.error(err);
    }
    else{
        console.log('appended successfully');
    }
});*/

fs.rename('Abhinav.txt','personalinfo.txt', function(err){
    if (err){console.error(err);}
    else{
        console.log('renamed successfully');
    }
});