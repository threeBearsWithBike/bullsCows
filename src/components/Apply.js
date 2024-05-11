import { Context } from "../store/context";
import { useContext } from "react";

const Apply = () => {
    const {state, dispatch} = useContext(Context);
    const handlerClick = () => {
        let bulls = 0;
        let cows = 0;
        state.targetNumber.forEach((onePartNumber, idx) => {
            if (state.currentNumber.includes(onePartNumber)) {
                idx === state.currentNumber.indexOf(onePartNumber) ? bulls += 1 : cows += 1;
            }
        })
        dispatch({type: 'setResult', payload: {bulls, cows}});
    }
    return (
        <button
            onClick={handlerClick}
        >
            Принять
        </button>
    )
}

export default Apply;