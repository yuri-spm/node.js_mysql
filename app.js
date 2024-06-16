//import module
const express = require('express');

//app

const app = express();

//hello word

app.get('/', function(req, res){
    res.write("Hello Word");
    res.end();
});

//server
app.listen(8080);