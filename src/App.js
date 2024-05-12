import './App.css';
import { Context } from './store/context';
import { useReducer } from 'react';
import { reducer } from './store/reducer';
import { initialState } from './store/initialState';
import bull from './img/bull_pic.png';
import Description from './components/Description';
import Game from './components/Game';
import { TbFileDescription } from "react-icons/tb";

function App() {
  const [state, dispatch] = useReducer(reducer, initialState);
  return (
    <div className="App">
      <Context.Provider value={{state, dispatch}}>
        {
          !state.isOpenDescription &&
            <h1 className='app-title'>
              Быки и Коровы
              <span
                className='btn-descrition'
                onClick={() => dispatch({type: 'setIsOpenDescription'})}
              >
              <TbFileDescription />
              </span>
              <img src={bull} alt="bull" className='bull-pic'/>  
            </h1>
        }
        {
          state.isOpenDescription ? 
            <Description /> : 
            <Game />
        }
      </Context.Provider>
    </div>
);
}

export default App;