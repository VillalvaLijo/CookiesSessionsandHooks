const express = require('express');
const pool = require('../modules/pool');
const url = require('url');

const router = express.Router();

// router.get('/', (req, res)=>{
//     // console.log("Inside clickCounter GET request, req", req);
//     // console.log("Inside clickCounter GET request, req")
//     console.log("Inside click counter get request, req.session", req.session);

// })

// router.head('/', (req, res)=>{
//     console.log("inside click counter router, head request:", req);
//     console.log("inside click counter router, response", res);
// })

router.get('/', (req, res) =>{
    // console.log("In secound button get request, req.session", req.session);

    secoundCounterClicks = req.session.secoundCounterClicks;

    console.log("Inside secound counter get request, req.session.secoundCounterClicks", req.session.secoundCounterClicks);
    // console.log("Inside Get request, req.session",req.session);
    // console.log("Inside GET request, req",req);
    res.send(secoundCounterClicks);    
})

router.post('/', (req, res) => {
    console.log("inside secound button Post Request, req.body:", req.body.secoundCounterClicks)

    req.session.secoundCounterClicks = req.body.secoundCounterClicks;

    console.log("Inside secound button post Request, req.session.secoundCounterClicks", req.session.secoundCounterClicks);
    // console.log("Inside the POST request, req. session", req.session)
    // const sqlText = `INSERT INTO userclicks (secoundbuttonclicks) VALUES ( $1) RETURNING id`

    // pool.query(sqlText, [secoundbuttonclicks])
    //     .then((result) => {
    //         res.sendStatus(201)
    //     })
    //     .catch((error) => {
    //         console.log(`Error making database query ${sqlText}`, error);
    //         res.sendStatus(500);
    //     });
});



// router.post('/fourthCounter', (req, res)=>{
//     console.log("Inside fourth button counter POST Request, req.body", req.body);
// })




module.exports = router