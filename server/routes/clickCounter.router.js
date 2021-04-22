const express = require('express');
const pool = require('../modules/pool');
const url = require('url');

const router = express.Router();


router.post('/', (req, res) =>{
    //Make a database query with user, cookie session and 
    //times the click button has been clicked

    console.log("Inside post in clickCounter.router, req.body", req.body)
})

module.exports = router