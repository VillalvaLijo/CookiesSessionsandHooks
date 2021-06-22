const express = require('express');
const pool = require('../modules/pool');
const url = require('url');

const router = express.Router();


router.get('/', (req, res) =>{
    // console.log("In secound button get request, req.session", req.session);

    //if there is a number in the cookie session oject assign it to scoundCounterClicks to 
    //be sent back client side otherwise if there is nothing send back zero
    //this is done so the client side isn't given a Null or NAN answer
    let secoundCounterClicks;
    if(req.session.secoundCounterClicks)
    {
    secoundCounterClicks = { secoundCounterClicks: req.session.secoundCounterClicks};

    }else{
        secoundCounterClicks = 0; 
    }

    //console.log("Inside secound counter get request, req.session.secoundCounterClicks", req.session.secoundCounterClicks);
    
    res.send(secoundCounterClicks);    
})

router.post('/', (req, res) => {
    //console.log("inside secound button Post Request, req.body:", req.body.secoundCounterClicks)

    //assign clicks from client side to be stored in session object storage
    req.session.secoundCounterClicks = req.body.secoundCounterClicks;

    //console.log("Inside secound button post Request, req.session.secoundCounterClicks", req.session.secoundCounterClicks);
    
    
    
    res.sendStatus(200);
});


module.exports = router