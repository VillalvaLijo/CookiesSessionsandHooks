
import './App.css';
import CounterButton from '../CounterButton/CounterButton';
import ClickCounterComponent from '../clickCounterComponent/clickCounterComponent';
import BoundClickCounter from '../BoundClickCounter/BoundClickCounter';
// import axios from 'axios';
// import UseReducerCounter from '../UseReducerCounter/useReducerCounter'

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom"

import NavBar from '../NavBar/NavBar';

function App() {

 

  return (
<div>
  <Router>
    <NavBar/>
  {/* <h1>Hello World</h1> */}
  
  
  
  {/* <UseReducerCounter/> */}
    <Switch>
      <Route path="/firstClicker">
        <CounterButton/>
      </Route>
      <Route path="/secoundClicker">
        <ClickCounterComponent/>
      </Route>
      <Route path="/thirdClicker">
        <BoundClickCounter/>
      </Route>
    </Switch>

  </Router>
</div>

  );
}

export default App;
