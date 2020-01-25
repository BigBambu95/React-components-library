import * as React from 'react';
import classnames from 'classnames';

export interface IButtonGroup {
    children: JSX.Element[],
    orientation?: 'horizontal' | 'vertical',
    className?: string,
}

const ButtonGroup = ({ ...attrs }, { children, orientation, className } : IButtonGroup) => {

    const classes = classnames(
        'btn-group',
        className,
        orientation
    );

    return(
        <div 
            className={classes} 
            {...attrs}
        >
            {children}
        </div>
    )
}

ButtonGroup.defaultProps = {
    children: null,
    className: '',
    orientation: 'horizontal'
}

export default ButtonGroup;