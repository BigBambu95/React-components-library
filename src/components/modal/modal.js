import React, { useState } from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';

import Portal from '../portal';

const Modal = ({
    className, children, isOpen
}) => {

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

Modal.propTypes = {
    children: PropTypes.node,
    className: PropTypes.string
}

Modal.defaultProps = {
    children: null,
    className: ''
}

export default Modal;