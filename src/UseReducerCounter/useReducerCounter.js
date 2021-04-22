import React from 'react';
import {useReducer} from 'react';
import axios from 'axios';


const initialState = { count: 0 };
const reducer = (state, action) => {
  switch (action.type) {
    case "increment":
        // console.log("Inside Reducer, state", state);
        // postFourthButtonClick();
        // {state.count+=1}
        // postFourthButtonClick(state.count);
        // console.log("Inside reducer, {state}", {state});
        // console.log("Inside Reducer, state", state)
        state.count+=1;
        console.log("Inside Reducer, state.count", state.count);
        postFourthButtonClick(state.count)
        console.log("Inside Post Function, state.count", state.count)
        // return {state.count};
        // return
        return { count: state.count}
    //   return { count: state.count};
        // console.log("Inside reducer, state.count", state.count);
        // return {state.count};
        // {state.count: state.count +1};
        
        // postFourthButtonClick(state.count) 
        // return;
        // postFourthButtonClick();
    case "decrement":
        // postFourthButtonClick();
        state.count -=1;
        console.log("Inside decrement part of reducer, state.count:", state.count);
        postFourthButtonClick(state.count);
        return {count: state.count}
    //   return { count: state.count - 1 };
        // {state.count: state.count -1}
        // postFourthButtonClick(state.count);
        // return
    default:
      throw new Error();
  }
};

function postFourthButtonClick(count){
    axios({
        method: 'post',
        url: '/api/clickCounter/fourthCounter',
        data: {
          fourthbuttonclicks: count
        }
      });
}
const increment = () => ({ type: "increment" });
const decrement = () => ({ type: "decrement" });


function UseReducerCounter() {
  const [state, dispatch] = useReducer(reducer, initialState);
  return (
    <>

    <p>This is the useReducer Counter button it uses the useReducer hook</p>
      Count: {state.count}
      <button onClick={() => dispatch({type: "incremnet"})}>+</button>
      <button onClick={() => dispatch({type: "decrement"})}>-</button>
    </>
  );
}

export default UseReducerCounter;