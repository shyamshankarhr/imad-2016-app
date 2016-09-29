var express = require('express');
var morgan = require('morgan');
var path = require('path');

var app = express();
app.use(morgan('combined'));

var shyamContent = {
    title: "Shyam Shankar H R",
    heading: "Shyam Shankar H R",
    img: "ui/shyam.jpg",
    content:"Koottathil ettavum look.. Verum kidilam. Mwunthaanu.",
};

function createTemplate(data){
    
    var title=data.title;
    var heading=data.heading;
    var img=data.img;
    var content=data.content;
    var htmlTemplate=
    `
    <html>
    <head>
        <title>
            ${title}
        </title>
        <meta name="viewport" content="width-device-width, initial-scale-1"/>
        <link href="ui/style.css" rel="stylesheet"/>
        </head>
    <body style="font-family: sans-serif;">
        <ul class=nav-options>
            <li><a href="/">Home |</a></li>
            <li><a href="/shyam"> Shyam |</a></li>
            <li><a href="/feroz"> Feroz | </a></li>
            <li><a href="/gautam"> Gautam | </a></li>
            <li><a href="/nagesh"> Nagesh |</a></li>
            <li><a href="/aravind"> Aravind |</a></li>
            <li><a href="/barjun"> B Arjun</a></li>
        </ul>
       <h2 class="name-title">${heading}</h2>
        <img src="${img}" class="photo">
        <h4 class="descrip">Description</h4>
        <p class="content">
            ${content}
        </p>
    </body>
    </html>
    `;
    return htmlTemplate;
}

app.get('/', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'index.html'));
});
app.get('/shyam', function (req, res) {
  res.send(createTemplate(shyamContent));
});
app.get('/aravind', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'aravind.html'));
});
app.get('/barjun', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'barjun.html'));
});
app.get('/nagesh', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'nagesh.html'));
});
app.get('/feroz', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'feroz.html'));
});
app.get('/gautam', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'gautam.html'));
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
