const express = require('express');
const pool = require('../modules/pool');
const url = require('url');

const router = express.Router();


router.post('/', (req, res) =>{
    //Make a database query with user, cookie session and 
    //times the click button has been clicked

    console.log("Inside third button post in clickCounter.router, req.body", req.body)

    req.session.thirdCounterClicks = req.body.thirdbuttonclicks;

    // console.log("Inside third Counter POST, req.session", req.session);
    // res.sendStatus(200)
    // res.end("it worked")

    res.redirect('back')
});

router.get('/', (req, res) =>{
    // console.log("Inisde Third COunter GET, req.session", req.session)
    console.log("Inside Third COunter GET request, req.session.thirdCounterClicks", req.session.thirdCounterClicks);
    let clicks = req.session.thirdCounterClicks;
    // let thirdCounterClicks = {thirdCounterClicks: req.session.thirdCounterCLicks};
    let thirdCounterClicks = {thirdCounterClicks: clicks};
    console.log("Inside third counter get request, thirdCounterClicks", thirdCounterClicks);
    res.send(thirdCounterClicks);
})

module.exports = router;