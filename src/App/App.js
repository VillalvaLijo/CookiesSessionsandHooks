
import './App.css';
import CounterButton from '../CounterButton/CounterButton';
import ClickCounterComponent from '../clickCounterComponent/clickCounterComponent';
import BoundClickCounter from '../BoundClickCounter/BoundClickCounter';
import UseReducerCounter from '../UseReducerCounter/useReducerCounter'

function App() {
  return (
<div>
  <h1>Hello World</h1>
  <CounterButton/>
  <ClickCounterComponent/>
  <BoundClickCounter/>
  <UseReducerCounter/>
</div>
  );
}

export default App;
