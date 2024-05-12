import { Context } from "../store/context";
import { useContext } from "react";
import Result from "./Result";
import TargetNumber from "./TargetNumber";
import Apply from "./Apply";
import Win from "./Win";
import '../index.css';

const Game = () => {
    const {state, dispatch} = useContext(Context);
    return (
        <div>
            <div>
                {
                    state.targetNumber.length === 0 ?
                    <button
                        className='game-btn'
                        onClick={() => dispatch({type: 'getTargetNumber'})}
                    >
                        Старт
                    </button> :
                    <>
                        <Result />
                        <TargetNumber />
                    </>
                }
            </div>
            <div>
                {
                    !state.currentNumber.includes(10) && <Apply />
                }
                {
                    state.bulls === 4 && <Win />
                }
            </div>
        </div>
    )
}

export default Game;