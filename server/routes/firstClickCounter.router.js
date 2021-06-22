const express = require('express');
const pool = require('../modules/pool');
const url = require('url');

const router = express.Router();

router.post('/', (req, res) =>{
    //console.log("Inside firstCounterClick Post Request, req.body.firstCounterClicks", req.body.firstCounterClicks);
    

    //this assigns the amount of clicks listed in the post request to the 
    // cookie session in order to be stored server side. 
    req.session.firstCounterClicks = req.body.firstCounterClicks;
    //console.log("req.session", req.session);
    res.sendStatus(200);
})



router.get('/', (req, res) => {


    //This sends back the clicks stored with the session in order for it to be displayed client side
    
    firstCounterClicks = { firstCounterClicks: req.session.firstCounterClicks}
    // console.log("Inside first Counter router, get request, req.session.firstCounterClicks", req.session.firstCounterClicks);
    // console.log("Inside firstCounterCLicks GET request, firstCounterClick", firstCounterClicks);
    res.send(firstCounterClicks);
})


module.exports = router