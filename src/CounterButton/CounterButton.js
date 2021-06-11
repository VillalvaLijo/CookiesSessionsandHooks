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



const useStyles = makeStyles((theme) =>({
  root: {
    display: "flex",
    justifyContent: "center",
    flexGrow: 1,
    maxWidth: 250,
    
    "background-color": "#26a69a",
    
  },
  button:{
    "background-color": 'Yellow',
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
          <Typography component="div" style={{backgroundColor:'cyan', height:'100vh'}} >
         
          <Card className={classes.root}>
          {/* <ThemeProvider theme = {GeneralTheme}> */}
          <p>You clicked {count} times</p>
          <Button className = {classes.button} variant="contained" color="secondary" onClick={() => setCount(count + 1)}>
            Click me
          </Button>
          {/* </ThemeProvider> */}
          </Card>

          </Typography>
          </Container>
        </div>
      );
}

export default CounterButton;