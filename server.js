var express = require('express');
var morgan = require('morgan');
var path = require('path');

var app = express();
app.use(morgan('combined'));

app.get('/', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'index.html'));
});
app.get('/shyam', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'shyam.html'));
});
app.get('/aravind', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'aravind.html'));
});

app.get('/ui/style.css', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'style.css'));
});

app.get('/ui/smiley.jpg', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'smiley.jpg'));
});
app.get('/ui/gautam.jpg', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'gautam.jpg'));
});
app.get('/ui/shyam.jpg', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'shyam.jpg'));
});
app.get('/ui/feroz.jpg', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'feroz.jpg'));
});
app.get('/ui/nagesh.jpg', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'nagesh.jpg'));
});
app.get('/ui/barjun.jpg', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'barjun.jpg'));
});
app.get('/ui/aravind.jpg', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'aravind.jpg'));
});


var port = 8080; // Use 8080 for local development because you might already have apache running on 80
app.listen(8080, function () {
  console.log(`IMAD course app listening on port ${port}!`);
});
