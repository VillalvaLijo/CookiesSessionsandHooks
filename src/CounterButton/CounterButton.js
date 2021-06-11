import React, {useState, useEffect} from 'react';
import axios from 'axios';
import Button from '@material-ui/core/Button';
import GeneralTheme from '../GeneralTheme/GeneralTheme';
import { makeStyles } from '@material-ui/core/styles';
import { ThemeProvider } from '@material-ui/core';

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
    justifyContent: "center",
    alignItems: "center",
    flexGrow: 1,
  
    //maxWidth: 250,
      // "background-color": "#26a69a",
  
    
  },
  cardCss: {
    display: "flex",
    "background-color": "#26a69a",
    width: 250,
    height: 460,
    flexDirection: "column",
    alignItems: "flex-start",
    justifyContent:"center",
    justifyContent: "space-around",
    // boxShadow: '10',


  },
  countDisplay:{
    fontSize: 150,
    padding: 0,
  },
  button:{
    "background-color": 'Yellow',
    // alignItems: "flex-end",
    maxWidth: 150,
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
            <Typography component="div" style={{backgroundColor:'cyan', height:'100vh'}}className={classes.root}>
          {/* <Typography className={classes.root} > */}
          {/* <div className={classes.root}> */}
              <Box sx={{ width: 500, 
                          height: 500,
                          bgcolor:"#26a69a",
                          justifyContent:"center",
                          alignItems: "center"}}>
              <Card className={classes.cardCss}>
              {/* <ThemeProvider theme = {GeneralTheme}> */}
                {/* <p>You clicked {count} times</p>
                <br/> */}
                <Box sx={{padding:0}}>
                <h1  className={classes.countDisplay}>{count}</h1>
                </Box>
                <Button className = {classes.button} variant="contained" color="secondary" onClick={() => setCount(count + 1)}>
                  Click me
                </Button>
              {/* </ThemeProvider> */}
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