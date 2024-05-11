import { Context } from "../store/context";
import { useContext } from "react";
import { TfiBackLeft } from "react-icons/tfi";

const Description = () => {
    const {dispatch} = useContext(Context);
    const handlerClick = () => {
        dispatch({type: 'setIsOpenDescription'});
    }
    return (
        <div className='Description'>
            <div className='Description-main'>
                <h1>Быки и коровы</h1>
                <h2>Описание</h2>
                <p>Быки и коровы - логическая игра, в ходе которой необходимо отгадать тайное 4-значное число с неповторяющимися цифрами.</p>
                <p>Выберите ваш вариант числа, каждое совпадение с тайным числом - это одна корова, каждое совпадение с позицией в тайном числе - один бык</p>
                <div className='Description-main-btn'>
                    <TfiBackLeft onClick={handlerClick} />
                </div>
            </div>            
            <div>
                Медведев Е.А
            </div>
        </div>
    )
}

export default Description;