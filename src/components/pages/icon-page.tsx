import * as React from 'react';
import Icon from '../icon';

const IconPage = (): JSX.Element => {
    return(
        <section className="icon-page">
            <div>
                <h4>Иконка без атрибутов</h4>
                <Icon name="male" />
            </div>
            <div>
                <h4>Иконка с заданными размерами</h4>
                <Icon name="male" />
            </div>
        </section>
    )
}


export default IconPage;