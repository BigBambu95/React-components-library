import * as React from 'react';
import ButtonGroup from '../button-group';
import Button from '../button';


const ButtonGroupPage = (): JSX.Element => {
    return(
        <section className="button-groups-page">
            <div>
                <h4>Стандартная группа кнопок</h4>
                <ButtonGroup orientation="horizontal">
                    <Button variant="contained">Открыть</Button>
                    <Button variant="contained">Изменить</Button>
                    <Button variant="contained">Удалить</Button>
                </ButtonGroup>
            </div>
            <div>
                <h4>Вертикальная группа кнопок</h4>
                <ButtonGroup orientation="vertical">
                    <Button variant="contained">Открыть</Button>
                    <Button variant="contained">Изменить</Button>
                    <Button variant="contained">Удалить</Button>
                </ButtonGroup>
            </div>
        </section>
    )
}

export default ButtonGroupPage;