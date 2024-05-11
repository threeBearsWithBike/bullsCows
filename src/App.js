import './App.css';
import { Context } from './store/context';
import { useReducer } from 'react';
import { reducer } from './store/reducer';
import { initialState } from './store/initialState';
import bull from './img/bull_pic.jpg';
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
          <>
            <img src={bull} alt="bull" className='bull-pic'/>
            <span onClick={() => dispatch({type: 'setIsOpenDescription'})}>
              Описание игры
              &nbsp; 
              <TbFileDescription />
            </span>
          </>
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