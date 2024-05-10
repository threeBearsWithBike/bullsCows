import { Context } from "../store/context";
import { useContext } from "react";
import '../index.css';

const Win = () => {
    const {state, dispatch} = useContext(Context);
    const handlerClick = () => {
        dispatch({type: 'playAgain'});
    }
    return (
        <div className='Win'>
            <div className="Win-message">
                <h2>{state.targetNumber.join('')}</h2>
                <h1>Вы победили!</h1>
                <button
                    onClick={handlerClick}
                >
                    Play Again
                </button>
            </div>
        </div>
    )
}

export default Win;