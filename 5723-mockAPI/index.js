var express = require('express');
var app = express();


const dummy = 
  [{ title: "song title 1", artists: [{ name: "artist name 1"}], duration: 200 },
  { title: "song title 2", artists: [{ name: "artist name 2"}], duration: 200 },
  { title: "song title 3", artists: [{ name: "artist name 3"}], duration: 200 },
  { title: "song title 4", artists: [{ name: "artist name 4"}], duration: 200 }]

// app.get('/', function (req, res) {

// });

// app.listen(3000, function () {
//   console.log('Example app listening on port 3000!');
// });

let guest = Math.floor(Math.random()*5)
let check = Math.floor(Math.random()*5)
try{
  if (guest == check){
    // res.send(dummy)
    console.log(dummy)
  }else{
    nonExistFunction()
  }
}catch(error){
  console.error(error);
}