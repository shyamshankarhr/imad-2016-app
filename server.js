var express = require('express');
var morgan = require('morgan');
var path = require('path');

var app = express();
app.use(morgan('combined'));

var content ={
    shyam:{
    title: "Shyam Shankar H R",
    heading: "Shyam Shankar H R",
    img: "ui/shyam.jpg",
    content:"Koottathil ettavum look.. Verum kidilam. Mwunthaanu.",
    },
    feroz:{
    title: "Feroz Baker",
    heading: "Feroz Baker",
    img: "ui/feroz.jpg",
    content:"Die-hard GOT fan. Prefers 9-gag over FB, foreign universities over Indian, gay porn over straight. Has a ridiculously immense vocabulary.",
    },
    gautam:{
    title: "Gautam Sreekumar",
    heading: "Gautam Sreekumar",
    img: "ui/gautam.jpg",
    content:"Always trying out new ways to get friendzoned.. Ale*** enna vaakku mindiyaal deshyam varum. Mudangathe thundu kaanarundenkilum valya daiva vishwasiyaa ;P",
    },
    nagesh:{
    title: "Nagesh A P",
    heading: "Nagesh A P",
    img: "ui/nagesh.jpg",
    content:"Extremely talented in hiding gf's info from friends. Gay aanenkilum lesbian thundaan kaanan ishtam. Raaftarinte engine aaya Nagannan mwuthaanu.",
    },
    aravind:{
    title: "Aravind Shaj",
    heading: "Aravind Shaj",
    img: "ui/aravind.jpg",
    content:"Girlsine valakkan best.. Pioneer of MATHIIT's thundan-revolution. ID course onnukoodi padikkana thaalparyam.",
    },
    barjun:{
    title: "B Arjun",
    heading: "B Arjun",
    img: "ui/barjun.jpg",
    content:"The Kerala-topper. The CS buji.. BARjun. Annum innum ennum gf aayit CP yund. Barjun athil thripthanaanu.",
    }
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
app.get('/:memberName', function (req, res) {
  var memberName = req.params.memberName;
  res.send(createTemplate(content[memberName]));
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
