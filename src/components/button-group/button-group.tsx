import * as React from 'react';
import classnames from 'classnames';

export interface ButtonGroupProps {
    children: JSX.Element[];
    orientation?: 'horizontal' | 'vertical';
    className?: string;
}

const ButtonGroup = ({ children, orientation, className }: ButtonGroupProps): JSX.Element => {

    const classes = classnames(
        'btn-group',
        className,
        orientation
    );

    return(
        <div 
            className={classes} 
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