import React, {useState, useEffect} from 'react';
import axios from 'axios';

function CounterButton(){

    let [count, setCount] = useState(0)

    useEffect(()=>{

      
      console.log("Inside useEffect, function inside useEffect Hook, count",count);
      // getClicks();

      if(count == 0 ){
        getClicks();
      }else{
        postClicks();
      }
      // postClicks();
      // axios({
      //   method: 'post',
      //   url: '/api/firstClickCounter',
      //   data: {
      //     firstCounterClicks: count
      //   }
      // });

      // axios.interceptors.response.use(x => {
      //   // console.log(`Execution time for: ${x.config.url} - ${new Date().getTime() - x.config.meta} ms`)

      //   // const headers = {
      //   //   ... x.headers.common,
      //   //   ... x.headers[x.method],
      //   //   ...x.headers
      //   // }
      //   console.log("x", x)
      //   return x;
      // })
      
    });

    function getClicks(){
      axios.get('/api/firstClickCounter').then(resp =>{
        console.log("This is the first counter button get request, response", resp.data.firstCounterClicks);
        if(typeof(resp.data.firstCounterClicks)==='number' && resp.data.firstCounterClicks === resp.data.firstCounterClicks){
          setCount(count = resp.data.firstCounterClicks);
        }
    
        console.log("Inisde first counter button get request, count", count);
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
          <p>You clicked {count} times</p>
          <button onClick={() => setCount(count + 1)}>
            Click me
          </button>
        </div>
      );
}

export default CounterButton;