import * as React from 'react';

import SvgIcon from '../svg-icon';
import MessageIcon from '../../icons/message.svg';
import Button from '../button';
import Tooltip from '../tooltip';

const TooltipPage = () => {
    return(
        <section className="tooltip-page">
            <div>
                <h4>Подсказка с верхним расположением</h4>
                <div>
                    <Tooltip title="Отправить" position="top">
                        <Button variant="icon">
                            <SvgIcon component={MessageIcon} width="32" height="32" viewBox="0 0 24 24" />
                        </Button>                          
                    </Tooltip>
                </div>
            </div>
            <div>
                <h4>Подсказка с левым расположением</h4>
                <div>
                    <Tooltip title="Отправить" position="left">
                        <Button variant="icon">
                            <SvgIcon component={MessageIcon} width="32" height="32" viewBox="0 0 24 24" />
                        </Button>                          
                    </Tooltip>
                </div>
            </div>
            <div>
                <h4>Подсказка с нижним расположением</h4>
                <div>
                    <Tooltip title="Редактировать" position="bottom">
                       <span>Наведите на текст и увидите подсказку!</span>                   
                    </Tooltip>
                </div>
            </div>
            <div>
                <h4>Подсказка с правым расположением</h4>
                <div>
                    <Tooltip title="Редактировать" position="right">
                       <span>Наведите на текст и увидите подсказку!</span>                   
                    </Tooltip>
                </div>
            </div>
        </section>
    )
}

export default TooltipPage;