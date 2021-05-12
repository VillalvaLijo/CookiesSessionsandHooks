import React, {useState, useEffect} from 'react';
import axios from 'axios';

function CounterButton(){

    const [count, setCount] = useState(0)

    useEffect(()=>{
      console.log("Inside useEffect, function inside useEffect Hook, count",count);
      
      axios({
        method: 'post',
        url: '/api/firstClickCounter',
        data: {
          firstCounterClicks: count
        }
      });
      getClicks();
    })

    function getClicks(){
      axios.get('/api/firstClickCounter').then(resp =>{
        console.log("This is the first counter button get request, response", resp.data);
  
      }).catch(error =>{
        console.log('error making first counter click get', error);
      });
    }


    return (
        <div>
          <p>You clicked {count} times</p>
          <button onClick={() => setCount(count + 1)}>
            Click me
          </button>
        </div>
      );
}

export default CounterButton;