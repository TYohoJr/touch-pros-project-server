var express = require('express');
var app = express();
var path = require('path');
require('dotenv').config();
var bodyParser = require('body-parser');

app.use(express.static(path.join(__dirname, "build")));
app.use(bodyParser.json({ type: 'application/json' }));
app.use(bodyParser.urlencoded({ extended: true }));

app.get('/', function (req, res) {
    res.sendFile(path.join(__dirname, 'build', 'index.html'));
});

app.listen(process.env.PORT, () => {
    console.log(`listening on ${process.env.PORT}`);
});
