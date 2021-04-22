import React from 'react';
import {useReducer} from 'react';


const initialState = { count: 0 };
const reducer = (state, action) => {
  switch (action.type) {
    case "increment":
      return { count: state.count + 1 };
    case "decrement":
      return { count: state.count - 1 };
    default:
      throw new Error();
  }
};
const increment = () => ({ type: "increment" });
const decrement = () => ({ type: "decrement" });


function UseReducerCounter() {
  const [state, dispatch] = useReducer(reducer, initialState);
  return (
    <>

    <p>This is the useReducer Counter button it uses the useReducer hook</p>
      Count: {state.count}
      <button onClick={() => dispatch(increment())}>+</button>
      <button onClick={() => dispatch(decrement())}>-</button>
    </>
  );
}

export default UseReducerCounter;