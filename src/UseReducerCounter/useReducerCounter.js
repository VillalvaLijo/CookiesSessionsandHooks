import React from 'react';
import {useReducer} from 'react';
import axios from 'axios';


//the switch statement is running the code inside the case twice but only for the vale 
//assignment for state.count

const initialState = { count: 0 };
const reducer = (state, action) => {
  switch (action.type) {
    case "increment":{

  
        // console.log("Inside Reducer, state", state);
        // postFourthButtonClick();
        // {state.count+=1}
        // postFourthButtonClick(state.count);
        // console.log("Inside reducer, {state}", {state});
        // console.log("Inside Reducer, state", state)
        state.count = state.count +1;
        // state.count += 1;
        console.log("Inside Reducer, state.count", state.count);
        // postFourthButtonClick(state.count)
        console.log("Inside Post Function, state.count", state.count)
        // return {state.count};
        // return
        // var count_2 = state.count
        return { count: state.count}
        // break
    }
    //   return { count: state.count};
        // console.log("Inside reducer, state.count", state.count);
        // return {state.count};
        // {state.count: state.count +1};
        
        // postFourthButtonClick(state.count) 
        // return;
        // postFourthButtonClick();
    case "decrement":{

   
        // postFourthButtonClick();
        state.count -=1;
        // state.count -= 1;
        console.log("Inside decrement part of reducer, state.count:", state.count);
        // postFourthButtonClick(state.count);
        // var count_1 = state.count
        return {count: state.count}
        // break
    }
    //   return { count: state.count - 1 };
        // {state.count: state.count -1}
        // postFourthButtonClick(state.count);
        // return
    default:
      throw new Error();
  }

//   if(action.type = "increment"){
//       state.count += 1;
//       postFourthButtonClick(state.count)
//       return{count: state.count}
//   }else if(action.type = "decrement"){
//       state.count -= 1;
//       postFourthButtonClick(state.count)
//       return{count: state.count}
//   }
//   else{
//       throw new Error();
//   }
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
// const increment = () => ({ type: "increment" });
// const decrement = () => ({ type: "decrement" });


function UseReducerCounter() {
  const [state, dispatch] = useReducer(reducer, initialState);
  return (
    <>

    <p>This is the useReducer Counter button it uses the useReducer hook</p>
      Count: {state.count}
      {/* <button onClick={() => dispatch(increment())}>+</button>
      <button onClick={() => dispatch(decrement())}>-</button> */}
        <button onClick={ () => dispatch({type :'increment'})}>+</button>
      <button onClick={ () => dispatch({type: 'decrement'})}>-</button>
    </>
  );
}

export default UseReducerCounter;