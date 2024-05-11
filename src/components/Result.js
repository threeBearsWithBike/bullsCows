import { Context } from "../store/context";
import { useContext } from "react";
import { GiBull } from "react-icons/gi";
import { PiCow } from "react-icons/pi";
import '../index.css';

const Result = () => {
    const {state} = useContext(Context);
    return (
        <div className='Result'>
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
        </div>
    )
}

export default Result;