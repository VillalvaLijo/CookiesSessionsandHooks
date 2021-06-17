
import './App.css';
import CounterButton from '../CounterButton/CounterButton';
import ClickCounterComponent from '../clickCounterComponent/clickCounterComponent';
import BoundClickCounter from '../BoundClickCounter/BoundClickCounter';
// import axios from 'axios';
// import UseReducerCounter from '../UseReducerCounter/useReducerCounter'
import HomePage from '../HomePage/HomePage';
import GeneralTheme from '../GeneralTheme/GeneralTheme';
import ClickerContainer from '../ClickerContainer/ClickerContainer'



import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom"

import NavBar from '../NavBar/NavBar';
import { ThemeProvider } from '@material-ui/core';

function App() {

 

  return (
<div className = "body">
  <Router>
    <ThemeProvider theme={GeneralTheme}>
    <NavBar/>
  {/* <h1>Hello World</h1> */}
  
  
  
  {/* <UseReducerCounter/> */}
    <Switch>
      <Route path="/firstClicker">
        {/* <ClickerContainer> */}
          <CounterButton/>
        {/* </ClickerContainer> */}
      </Route>
      <Route path="/secoundClicker">
        <ClickCounterComponent/>
      </Route>
      <Route path="/thirdClicker">
        <BoundClickCounter/>
      </Route>
      <Route
      path="/HomePage">
        <HomePage/>
      </Route>
      <Route
        path="/">
          <HomePage/>
        </Route>
    </Switch>
    </ThemeProvider>
  </Router>
</div>

  );
}

export default App;
