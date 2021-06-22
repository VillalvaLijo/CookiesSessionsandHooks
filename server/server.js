const express = require('express');

const session = require('express-session');

const cookieSession = require('cookie-session');

const firstClickCounterRouter = require('./routes/firstClickCounter.router');
const secoundClickCounterRouter = require('./routes/secoundClickCounter.router');
const thirdClickCounterRouter = require('./routes/thirdClickCounter.router')

const app = express();
const bodyParser = require('body-parser');

var http = require('http');
var https = require('https');

http.globalAgent.maxSockets = Infinity;
https.globalAgent.maxSockets = Infinity;

//cookieSession is middleware that needs to be applied before the routes
//in order to be accesible to the routes

// Makes req.session a thing
app.use(cookieSession({
  name: 'firstcookie',
  keys: ['cookiekey'],
 
  // Cookie Options
  maxAge: 60 * 60 * 1000 // 60 minutes
}));



app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true}));

app.use('/api/firstClickCounter', firstClickCounterRouter);
app.use('/api/secoundClickCounter', secoundClickCounterRouter);
app.use('/api/thirdClickCounter', thirdClickCounterRouter)


console.log("on server.js, app", );



app.use(express.static('build'));

// app.get(
const PORT = 5000;

app.listen(PORT, () =>{
    console.log(`Listening on port: ${PORT}`)
});
