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

//play around with cookieSession here

// Makes req.session a thing
app.use(cookieSession({
  name: 'firstcookie',
  keys: ['cookiekey'],
 
  // Cookie Options
  maxAge: 60 * 60 * 1000 // 60 minutes
}));


// var myLogger = function (req, res, next) {
//     console.log('LOGGED')
//     next()
//   }

// app.use(myLogger);


// app.use(session({
//     genid: function(req){
//         var genuid = genuuid()

//         console.log("Inside app.use genid, genuid:", genuid)
            //genuuid is not defined
//         return genuid//use UUIDs for session IDs
//     },
//     secret: 'SUPERSECRET'
// }));


app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true}));

app.use('/api/firstClickCounter', firstClickCounterRouter);
app.use('/api/secoundClickCounter', secoundClickCounterRouter);
app.use('/api/thirdClickCounter', thirdClickCounterRouter)



// app.use(cookieSession({
//     name: 'clickcounter',
//     keys: ['key1', 'key2']
// }))

// console.log(app.use); //[Function: use]



// app.get('/', function (req, res) {
//     res.send('Hello World!')
//   })
  
// app.set('trust proxy', 1);
// app.use(session({
//     secret: 'keyboard warrior',
//     genid: function(req){
//         return genuuid()
//     },
//     resave: false,
//     saveUninitialized: true,
//     cookie: { secure: true}
//     }))



console.log("on server.js, app", );

// app.get('/', function(req, res, next){
//     console.log("inside app.get req", req);
//     console.log("inside app.get, res", res);
// })


app.use(express.static('build'));

// app.get('/', function (req, res, next){

//     console.log("Inside Get Request req.session: ", req.session);
// })

const PORT = 5000;

app.listen(PORT, () =>{
    console.log(`Listening on port: ${PORT}`)
});


//build a database that stores the amount of 
//times button has been clicked by different browsers
//then have it recalled by the cookie 