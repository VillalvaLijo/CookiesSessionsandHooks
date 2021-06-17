import React, {useState, useEffect} from 'react';
import axios from 'axios';
import Button from '@material-ui/core/Button';
import GeneralTheme from '../GeneralTheme/GeneralTheme';
// import { makeStyles } from '@material-ui/core/styles';
import { ThemeProvider } from '@material-ui/core';
import {makeStyles} from '@material-ui/styles'

import CssBaseline from '@material-ui/core/CssBaseline';
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';

import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';

import Box from '@material-ui/core/Box';



const useStyles = makeStyles((theme) =>({
  root: {
    display: "flex",
    "background-color": "#26a69a",
    color:"#26a69a",
    // backgroundColor:"black",
    width: 250,
    height: 460,
    flexDirection: "column",
    alignItems: "flex-start",
    justifyContent: "center",
  
    //maxWidth: 250,
      // "background-color": "#26a69a",
  
    
  },
  cardCss: {
    
    // bgcolor: "green",
    
    // color:  "#26a69a",
    
    // justifyContent: "space-between",
    // boxShadow: '10',


  },
  fontbox:{
    "background-color": "#26a69a",
  },
  countDisplay:{
    fontSize: 150,
    "background-color": "#26a69a",
    // paddingBottom: -30,
  },
  button:{
    "background-color": 'Yellow',
    // alignItems: "flex-end",
    maxWidth: 200,
    width: 200,
    // pageBreakBefore: always,
    "bottom": "1",
  }
}))


function CounterButton(){
    const classes = useStyles();
    let [count, setCount] = useState(0)

    useEffect(()=>{

      
      //console.log("Inside useEffect, function inside useEffect Hook, count",count);
    

      if(count == 0 ){
        getClicks();
      }else{
        postClicks();
      }
    });

    function getClicks(){
      axios.get('/api/firstClickCounter').then(resp =>{
        //console.log("This is the first counter button get request, response", resp.data.firstCounterClicks);
        if(typeof(resp.data.firstCounterClicks)==='number' && resp.data.firstCounterClicks === resp.data.firstCounterClicks){
          setCount(count = resp.data.firstCounterClicks);
        }
    
        //console.log("Inisde first counter button get request, count", count);
      }).catch(error =>{
        console.log('error making first counter click get', error);
      });
    }

    function postClicks(){
      axios({
        method: 'post',
        url: '/api/firstClickCounter',
        data: {
          firstCounterClicks: count
        }
      });
    }


    return (
        <div>
          <CssBaseline/>
          <Container maxWidth="lg">
            <Typography component="div" style={{backgroundColor:'#004d4d', 
                                                    height:'100vh',
                                                    display: "flex",
                                                    justifyContent: "center",
                                                    alignItems: "center",
                                                    flexGrow: 1,}}>
          {/* <Typography className={classes.root} > */}
          {/* <div className={classes.root}> */}
              <Box sx={{ width: 500, 
                          height: 500,
                          bgcolor:"#26a69a",
                          justifyContent:"center",
                          alignItems: "center"}}>
              <Card className={classes.root} style={{backgroundcolor:"#26a69a"}}>
              {/* <Card classes={{root: classes.root}} > */}

                <Box>
              {/* <ThemeProvider theme = {GeneralTheme}> */}
                {/* <p>You clicked {count} times</p>
                <br/> */}
                <Box className={classes.fontbox}>
                <h1  className={classes.countDisplay}>{count}</h1>
                </Box>
                <Button className = {classes.button} variant="contained"  onClick={() => setCount(count + 1)}>
                  Click me
                </Button>
              {/* </ThemeProvider> */}
              </Box>
              </Card>
              </Box>
            {/* </div> */}
            {/* </Typography> */}
            </Typography>
          </Container>
        </div>
      );
}

export default CounterButton;