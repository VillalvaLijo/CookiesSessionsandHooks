const express = require('express');

var cookieSession = require('cookie-session');

const app = express();
const bodyParser = require('body-parser');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true}));

app.use(cookieSession({
    name: 'clickcounter',
    keys: ['key1', 'key2']
}))


app.use(express.static('build'));

app.get('/', function (req, res, next){

    console.log("Inside Get Request req.session: ", req.session);
})

const PORT = 5000;

app.listen(PORT, () =>{
    console.log(`Listening on port: ${PORT}`)
});


//build a database that stores the amount of 
//times button has been clicked by different browsers
//then have it recalled by the cookie 