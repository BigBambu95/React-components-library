import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';

import SvgIcon from '../svg-icon';
import Image from '../image';

import CloseIcon from '../../icons/close.svg';


const Chip = ({
    children, variant, className, 
    size, icon, image, imgAlt, imgTitle, 
    onClick, onClose, id
}) => {

    const onClickAction = () => {
        onClick(id);
    }

    const onCloseAction = (e) => {
        e.stopPropagation();
        onClose(e, id);
    } 

    const classes = classnames(
        'chip',
        className,
        variant,
        size,
        { 'clickable': onClick }
    );

    const renderIcon = icon && <div className="chip__icon"><SvgIcon Component={icon} width="100%" height="100%" /></div>;
    const renderImage = image && (
        <div className="chip__image">
            <Image 
                src={image}
                alt={imgAlt} 
                title={imgTitle} 
                width="100%" 
                height="100%" 
            />
        </div>
    );

    const renderClose = onClose && (
        <button onClick={(e) => onCloseAction(e)} className="chip__close-btn">
            <SvgIcon Component={CloseIcon} width="20" height="20" viewBox="0 0 24 24" />
        </button>
    );

    return(
        <div 
            className={classes}
            onClick={onClickAction}
            id={id}
        >
            {renderIcon}
            {renderImage}
            <span className="chip__text">{children}</span>
            {renderClose}
        </div>
    )
}


Chip.propTypes = {
    variant: PropTypes.string,
    className: PropTypes.string,
    size: PropTypes.string,
    icon: PropTypes.func,
    image: PropTypes.node,
    imgAlt: PropTypes.string,
    imgTitle: PropTypes.string,
    onClick: PropTypes.func,
    onClose: PropTypes.func,
    id: PropTypes.oneOfType([
        PropTypes.number,
        PropTypes.string
    ])
}

Chip.defaultProps = {
    variant: 'contained',
    className: '',
    size: 'medium',
    icon: null,
    image: null,
    imgAlt: 'Image',
    imgTitle: 'Image',
    onClick: null,
    onClose: null,
    id: null
}

export default Chip;