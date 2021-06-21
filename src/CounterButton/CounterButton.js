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
import Paper from '@material-ui/core/Paper';


const useStyles = makeStyles((theme) =>({
  root: {
    display: "flex",
    // "background-color": "#26a69a",
    color:"#26a69a",
    // backgroundColor:"black",
    width: 275,
    height: 460,
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
  
    //maxWidth: 250,
      // "background-color": "#26a69a",
  
    
  },
  cardContent: {
        width: 275,
        height: 460,
        backgroundColor: '#6eded3',
        display: 'flex',
        justifyContent: 'center',
        "flex-direction": "column",
        alignItems: 'center',
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
    // "background-color": "#26a69a",
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
            <Typography component="div" style={{backgroundColor: '#26a69a',
                                                    // backgroundColor:'#004d4d', 
                                                    height:'100vh',
                                                    display: "flex",
                                                    flexDirection: 'column',
                                                    justifyContent: "center",
                                                    alignItems: "center",
                                                    flexGrow: 1,}}>
          {/* <Typography className={classes.root} > */}
          {/* <div className={classes.root}> */}
          <Typography variant='h3'>
            Hook Click Counter
          </Typography>
              <Box style={{ width: 500, 
                          height: 500,
                          display:'flex',
                          backgroundColor: '#26a69a',
                          justifyContent:"center",
                          alignItems: "center"}}>
                <Card className={classes.root}>
                <CardContent className={classes.cardContent} style={{backgroundColor: '#6eded3'}}>
              {/* <Card classes={{root: classes.root}} > */}

            
              {/* <ThemeProvider theme = {GeneralTheme}> */}
                {/* <p>You clicked {count} times</p>
                <br/> */}

                <h1  className={classes.countDisplay}>{count}</h1>
             
                <Button className = {classes.button} variant="contained"  color="secondary" onClick={() => setCount(count + 1)}>
                  Click me
                </Button>
              {/* </ThemeProvider> */}
        
              </CardContent>
              </Card>
              </Box>
              <Box style={{
                paddingTop: '30px'
              }}>
                <Paper elevation={5} style={{
                                      backgroundColor:'#6eded3',
                                      height: 75,
                                      width: 600,
                                      display: 'flex',
                                      justifyContent: 'center',
                                      alignItems: 'center'
                }}>
                  <Typography variant="body1" 
                    style={{
                      width: 500
                    }}
                  gutterBottom>
                    This functional react component uses Hooks to 'hook into' state and record the number of clicks that way. 
                  </Typography>

                </Paper>
              </Box>
             
            {/* </div> */}
            {/* </Typography> */}
            </Typography>
          </Container>
        </div>
      );
}

export default CounterButton;