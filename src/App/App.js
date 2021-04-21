
import './App.css';
import CounterButton from '../CounterButton/CounterButton';
import ClickCounterComponent from '../clickCounterComponent/clickCounterComponent';
import BoundClickCounter from '../BoundClickCounter/BoundClickCounter';


function App() {
  return (
<div>
  <h1>Hello World</h1>
  <CounterButton/>
  <ClickCounterComponent/>
  <BoundClickCounter/>
</div>
  );
}

export default App;
