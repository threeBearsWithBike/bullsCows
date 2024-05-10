import './App.css';
import { Context } from './store/context';
import { useReducer } from 'react';
import { reducer } from './store/reducer';
import { initialState } from './store/initialState';
import Result from './components/Result';
import Button from './components/Button';
import Apply from './components/Apply';
import Win from './components/Win.js';

function App() {
  const [state, dispatch] = useReducer(reducer, initialState);
  return (
    <div className="App">
      <Context.Provider value={{state, dispatch}}>
        hello world!
        <br />
        <span>{state.targetNumber}</span>
        <br />
        <Result />
        <br />
        {state.targetNumber.length === 0 ?
        <button onClick={() => dispatch({type: 'getTargetNumber'})}>get number</button> :
        state.currentNumber.map((value, idx) => <Button value={value} key={idx} index={idx} />)}
        {!state.currentNumber.includes(10) ? <Apply /> : ''}
        {state.bulls === 4 && <Win />}
      </Context.Provider>
    </div>
  );
}

export default App;
