console.log("WORKS");

var express = require('express');
var app = express();
var bodyParser = require('body-parser');


app.use(express.static('server/public'));
app.use(bodyParser.urlencoded({extended: true}));

var
app.get('/fish', function(req, res){
  res.send(fishiesList);
});
app.get('/fish/first', function(req, res){
  res.send(fishiesList[0]);
});
app.get('/fish/last', function(req, res){
  var lastIndex = fishiesList.length-1;
  res.send(fishiesList[lastIndex]);
});
app.get('/fish/first/name', function(req, res){
  res.send(fishiesList[0].name);
});

//handle request for the name of the last fish

app.get('/fish/last/name', function(req, res){
  var lastIndex = fishiesList.length-1;
  res.send(fishiesList[lastIndex].name);
});

app.post('/fish/new', function(req, res){
  
  }else {fishiesList.push(newFish);
    res.sendStatus(200);

  }
});








app.listen(5000);
