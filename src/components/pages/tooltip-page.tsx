import * as React from 'react';

import Button from '../button';
import Tooltip from '../tooltip';

const TooltipPage = () => {
    return(
        <section className="tooltip-page">
            <div>
                <h4>Подсказка с верхним расположением</h4>
                <div>
                    <Tooltip title="Отправить" position="top">
                        <Button>Открыть</Button>                          
                    </Tooltip>
                </div>
            </div>
            <div>
                <h4>Подсказка с левым расположением</h4>
                <div>
                    <Tooltip title="Отправить" position="left">
                        <Button>Удалить</Button>                          
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