import { useContext } from "react";
import { Context } from "../store/context";

const NUMBER_LINE = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

const Button = ({ value, index }) => {
    const {state, dispatch} = useContext(Context);
    const handlerClick = () => {
        let idxValue = NUMBER_LINE.indexOf(value);
        let nextValueIdx = idxValue === 10 ? 0 : idxValue += 1;
        while(state.currentNumber.includes(NUMBER_LINE[nextValueIdx])) {
            if (nextValueIdx === 10) {
                break;
            }
            nextValueIdx += 1;
        };
        let newCurrentNumber = state.currentNumber.map((number, idx) => idx !== index ? number : NUMBER_LINE[nextValueIdx]);
        dispatch({type: 'changeOnePartNumber', payload: newCurrentNumber});
    }
    return (
        <button
            style={{minWidth: '20px', minHeight: '20px'}}
            onClick={handlerClick}
        >
            {value !== 10 ? value : '*'}
        </button>
    )
}

export default Button;