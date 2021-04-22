const express = require('express');
const pool = require('../modules/pool');
const url = require('url');

const router = express.Router();


router.post('/secoundCounter', (req, res) => {
    console.log("inside secound button Post Request, req.body:", req.body)
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