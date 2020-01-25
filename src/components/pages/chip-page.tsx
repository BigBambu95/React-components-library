import * as React from 'react';
import Chip from '../chip';

import MaleIcon from '../../icons/male.svg';
import Avatar from '../../images/avatar.jpg';

const ChipPage = () => {

    const click = () : any => alert('clicked');
    const close = () : any => alert('closed');

    return(
        <section className="chip-page">
            <div>
                <h4>Обычная фишка</h4>
                <Chip>React</Chip>
            </div>
            <div>
                <h4>Контурная фишка</h4>
                <Chip variant="outlined">React</Chip>
            </div>
            <div>
                <h4>Размеры фишек</h4>
                <div>
                    <Chip variant="contained" size="small">React</Chip>
                    <Chip variant="contained" size="medium">React</Chip>
                </div>
                <div>
                    <Chip variant="outlined" size="small">React</Chip>
                    <Chip variant="outlined" size="medium">React</Chip>
                </div>
            </div>
            <div>
                <h4>Фишка с очень длинным текстом</h4>
                <Chip>Очень длинный текст очень длинный текст</Chip>
                <Chip variant="outlined">Очень длинный текст очень длинный текст</Chip>
            </div>
            <div>
                <h4>Фишка с иконкой</h4>
                <div>
                    <Chip icon={MaleIcon}>BigBambu</Chip>
                    <Chip icon={MaleIcon} variant="outlined">BigBambu</Chip>
                </div>
                <div>
                    <Chip icon={MaleIcon} size="small">BigBambu</Chip>
                    <Chip icon={MaleIcon} variant="outlined" size="small">BigBambu</Chip>
                </div>
            </div>
            <div>
                <h4>Фишка с картинкой</h4>
                <div>
                    <Chip image={Avatar}>BigBambu</Chip>
                    <Chip image={Avatar} variant="outlined">BigBambu</Chip>
                </div>
                <div>
                    <Chip image={Avatar} size="small">BigBambu</Chip>
                    <Chip image={Avatar} variant="outlined" size="small">BigBambu</Chip>
                </div>
            </div>
            <div>
                <h4>Кликабельная фишка</h4>
                <div>
                    <Chip onClick={click}>Vue</Chip>
                    <Chip onClick={click} variant="outlined">React</Chip>
                </div>
                <div>
                    <Chip icon={MaleIcon} onClick={click}>BigBambu</Chip>
                    <Chip image={Avatar} onClick={click}>BigBambu</Chip>
                </div>
            </div>
            <div>
                <h4>Фишка с функцией закрытия</h4>
                <div>
                    <Chip onClose={close}>Vue</Chip>
                    <Chip variant="outlined"  onClose={close}>React</Chip>
                </div>
                <div>
                    <Chip icon={MaleIcon} onClose={close}>BigBambu</Chip>
                    <Chip image={Avatar} onClose={close}>BigBambu</Chip>
                </div>
            </div>
            <div>
                <h4>Полный фарш</h4>
                <div>
                    <Chip icon={MaleIcon} onClose={close} onClick={click}>BigBambu</Chip>
                    <Chip image={Avatar} onClose={close} onClick={click}>BigBambu</Chip>
                </div>
            </div>
        </section>
    )
}


export default ChipPage;