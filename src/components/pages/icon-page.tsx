import * as React from 'react';
import SvgIcon from '../svg-icon';
import MaleIcon from '../../icons/male.svg';

const IconPage = () => {
    return(
        <section className="icon-page">
            <div>
                <h4>Svg иконка без атрибутов</h4>
                <SvgIcon component={MaleIcon} />
            </div>
            <div>
                <h4>Svg иконка с заданными размерами</h4>
                <SvgIcon component={MaleIcon} width='128' height='128' />
            </div>
        </section>
    )
}


export default IconPage;