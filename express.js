const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');

const app = express();

app.use(express.static(path.join(__dirname, 'build')));
app.use(bodyParser.json({ type: 'application/json' }));
app.use(bodyParser.urlencoded({ extended: true }));

app.get('/', (req, res) => {
    res,sendFile(path.join(__dirname, 'build', 'index.html'));
});

app.listen(process.env.PORT || 8080, () => {
    let currentPort = process.env.PORT;
    if(currentPort) {
        console.log(`listening on ${currentPort}`);
    } else {
        console.log('listening on localhost://8080');
    }
});