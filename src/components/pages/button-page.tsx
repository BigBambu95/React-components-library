import * as React from 'react';
import Button from '../button';

const DeleteIcon = require('../../icons/trash.svg');

const ButtonsPage = () => {

    const click = () => console.log('click!');

    const send = () => console.log('sending...');


    return(
        <section className="buttons-page">
            <div>
                <h4>Стандартная кнопка</h4>
                <Button variant="contained" onClick={click}>Открыть</Button>
            </div>
            <div>
                <h4>Заблокированная кнопка</h4>
                <Button variant="contained" onClick={click} disabled>Загрузить</Button>
            </div>
            <div>
                <h4>Активная кнопка</h4>
                <Button variant="contained" onClick={click} active>Закрыть</Button>
            </div>
            <div>
                <h4>Кнопка с кастомными атрибутами</h4>
                <Button type="submit" variant="contained" onClick={send}>Отправить</Button>
                <Button data-id="1" variant="contained" onClick={send}>Отправить</Button>
            </div>
            <div>
                <h4>Кнопка как ссылка</h4>
                <Button variant="contained" href="/">Главная</Button>
                <Button variant="contained" href="/" disabled>Каталог</Button>
            </div>
            <div>
                <h4>Текстовые кнопки</h4>
                <Button>Открыть</Button>
                <Button disabled>Открыть</Button>
            </div>
            <div>
                <h4>Контурные кнопки</h4>
                <Button variant="outlined">Открыть</Button>
                <Button variant="outlined" disabled>Открыть</Button>
            </div>
            <div>
                <h4>Размеры кнопок</h4>
                <Button variant="contained" size="small">Открыть</Button>
                <Button variant="contained">Открыть</Button>
                <Button variant="contained" size="large">Открыть</Button>
            </div>
            {/* <div>
                <h4>Кнопка с иконкой и текстом</h4>
                <Button variant="contained" size="small">Удалить</Button>
                <Button variant="contained">Удалить</Button>
                <Button variant="contained" size="large">Удалить</Button>
            </div> */}
        </section>
    )
};

export default ButtonsPage;