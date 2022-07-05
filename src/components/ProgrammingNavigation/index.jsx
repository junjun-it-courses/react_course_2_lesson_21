import { useNavigate } from "react-router-dom";
import {useState} from "react";

const ProgrammingNavigation = () => {
    const navigation = useNavigate();
    let interval = null;

    const redirectUser = () => {

        setTimeout(() => {
            alert('Вы будете перенаправлены на главную страницу')
            navigation('/');
        }, 3000);

    }

    return <div className='programming-navigation'>
        <h2>Нажми на кнопку</h2>

        <button onClick={redirectUser}>
            Перенаправить на главную
        </button>

    </div>
}

export default ProgrammingNavigation;
