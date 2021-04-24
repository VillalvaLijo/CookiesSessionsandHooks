const express = require('express');
const pool = require('../modules/pool');
const url = require('url');

const router = express.Router();

router.get('/', (req, res)=>{
    // console.log("Inside clickCounter GET request, req", req);
    console.log("Inside clickCounter GET request, req")
})

router.head('/', (req, res)=>{
    console.log("inside click counter router, head request:", req);
    console.log("inside click counter router, response", res);
})


router.post('/secoundCounter', (req, res) => {
    console.log("inside secound button Post Request, req.body:", req.body.secoundbuttonclicks)

    secoundbuttonclicks = req.body.secoundbuttonclicks;
    const sqlText = `INSERT INTO userclicks (secoundbuttonclicks) VALUES ( $1) RETURNING id`

    pool.query(sqlText, [secoundbuttonclicks])
        .then((result) => {
            res.sendStatus(201)
        })
        .catch((error) => {
            console.log(`Error making database query ${sqlText}`, error);
            res.sendStatus(500);
        });
});

router.post('/thirdCounter', (req, res) =>{
    //Make a database query with user, cookie session and 
    //times the click button has been clicked

    console.log("Inside third button post in clickCounter.router, req.body", req.body)
});

router.post('/fourthCounter', (req, res)=>{
    console.log("Inside fourth button counter POST Request, req.body", req.body);
})




module.exports = router