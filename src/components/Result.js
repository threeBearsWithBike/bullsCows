import { Context } from "../store/context";
import { useContext } from "react";
import { GiBull } from "react-icons/gi";
import { PiCow } from "react-icons/pi";
import { GoArrowSwitch } from "react-icons/go";
import '../index.css';

const Result = () => {
    const {state, dispatch} = useContext(Context);
    const handlerClick = () => {
        dispatch({type: 'typeResult'});
    }
    return (
        <div className='Result' style={{flexDirection: state.result ? 'row' : 'column'}}>
            <span
                className='result-btn'
                onClick={handlerClick}
            >
                <GoArrowSwitch />
            </span>
            {
                state.result ? 
                <>
                    <div>
                        <GiBull className='Result-icon' />
                        <span className='Result-value'>
                            /{state.bulls}
                        </span>
                    </div>
                    <div>
                        <PiCow className='Result-icon' />
                        <span className='Result-value'>
                            /{state.cows}
                        </span>
                    </div>
                </> :
                <>
                    <div>
                        {
                            state.currentNumber.map((item, idx) => <GiBull
                                                                        style={{opacity: (idx + 1) <= state.bulls ? '1' : '0.5', 
                                                                        fontSize: '2rem',
                                                                        fontWeight: 'bold'}}
                                                                    />)                                                                    
                        }
                    </div>
                    <div>
                        {
                            state.currentNumber.map((item, idx) => <PiCow
                                                                        style={{opacity: (idx + 1) <= state.cows ? '1' : '0.5',
                                                                        fontSize: '2rem',
                                                                        fontWeight: 'bold'}}
                                                                    />)
                        }
                    </div>
                </>
            }
        </div>
    )
}

export default Result;