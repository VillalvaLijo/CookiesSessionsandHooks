import React, {useState, useEffect} from 'react';
import axios from 'axios';
import Button from '@material-ui/core/Button';
import GeneralTheme from '../GeneralTheme/GeneralTheme';
import { makeStyles } from '@material-ui/core/styles';
import { ThemeProvider } from '@material-ui/core';

const useStyles = makeStyles((theme) =>({
  root: {
    display: "flex",
    flexGrow: 1,
    "Justify-Content": "center",
    color: "red",
  }
}))


function CounterButton(){
    const classes = useStyles();
    let [count, setCount] = useState(0)

    useEffect(()=>{

      
      console.log("Inside useEffect, function inside useEffect Hook, count",count);
    

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
        <div className={classes.root}>
          {/* <ThemeProvider theme = {GeneralTheme}> */}
          <p>You clicked {count} times</p>
          <Button className = {classes.root} variant="contained" color="secondary" onClick={() => setCount(count + 1)}>
            Click me
          </Button>
          {/* </ThemeProvider> */}
        </div>
      );
}

export default CounterButton;