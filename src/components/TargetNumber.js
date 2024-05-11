import { Context } from '../store/context';
import { useContext } from 'react';
import Button from './Button';
import '../index.css';

const TargetNumber = () => {
    const {state} = useContext(Context);
    return (
        <div className='TargetNumber'>
            {state.currentNumber.map((value, idx) => <Button value={value} key={idx} index={idx} />)}
        </div>
    )
}

export default TargetNumber;