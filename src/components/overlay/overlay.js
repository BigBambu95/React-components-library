import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';

import Portal from '../portal';

const Overlay = ({
    className, onClick
}) => {

    const classes = classnames(
        'overlay',
        className
    )

    return(
        <Portal>
            <div className={classes} onClick={onClick}></div>
        </Portal>
    )
}

Overlay.propTypes = {
   className: PropTypes.string,
   onClick: PropTypes.func 
}  

Overlay.defaultProps = {
    className: '',
    onClick: () => {}
}

export default Overlay;