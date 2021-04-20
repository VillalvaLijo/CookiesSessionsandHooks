const express = require('express');

var cookieSession = require('cookie-session');

const app = express();
const bodyParser = require('body-parser');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true}));


app.use(express.static('build'));

const PORT = 5000;

app.listen(PORT, () =>{
    console.log(`Listening on port: ${PORT}`)
});