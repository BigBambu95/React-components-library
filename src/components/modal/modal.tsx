import * as React from 'react';
import classnames from 'classnames';

import Portal from '../portal';

export interface IModal {
    children: JSX.Element | JSX.Element[],
    className?: string,
    isOpen: boolean
}

const Modal = ({
    className, children, isOpen
} : IModal) : JSX.Element => {

    const classes = classnames(
        'modal',
        className
    )

    if(!isOpen) return null;

    return(
        <Portal>
            <div className={classes}>
                {children}
            </div>
        </Portal>
    )
}

Modal.defaultProps = {
    children: null,
    className: ''
}

export default Modal;