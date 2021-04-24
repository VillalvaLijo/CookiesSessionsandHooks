const express = require('express');

const session = require('express-session');

// var cookieSession = require('cookie-session');

const clickCounterRouter = require('./routes/clickCounter.router');

const app = express();
const bodyParser = require('body-parser');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true}));

app.use('/api/clickCounter', clickCounterRouter);

// app.use(cookieSession({
//     name: 'clickcounter',
//     keys: ['key1', 'key2']
// }))

// app.use(session({
//     genid: function(req){
//         return genuuid()//use UUIDs for session IDs
//     },
//     secret: 'SUPERSECRET'
// }));
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