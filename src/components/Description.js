import { Context } from "../store/context";
import { useContext } from "react";
import { TfiBackLeft } from "react-icons/tfi";
import '../index.css';

const Description = () => {
    const {dispatch} = useContext(Context);
    const handlerClick = () => {
        dispatch({type: 'setIsOpenDescription'});
    }
    return (
        <div className='Description'>
            <div className='Description-main'>
                <h1 className='description-title'>Быки и коровы</h1>
                <h2 className='description-title'>Описание</h2>
                <p>Быки и коровы - логическая игра, в ходе которой необходимо отгадать тайное 4-значное число с неповторяющимися цифрами.</p>
                <p>Выберите ваш вариант числа, каждая совпавшая цифра в числе - это плюс одна корова, каждое совпадение с позицией в числе - это плюс один бык. Удачи!</p>
                <div className='Description-main-btn'>
                    <TfiBackLeft onClick={handlerClick} />
                </div>
            </div>            
            <div>
                &copy; Медведев Е.А, 2024
            </div>
        </div>
    )
}

export default Description;