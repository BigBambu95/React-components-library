import * as React from 'react';
import classnames from 'classnames';

import SvgIcon from '../svg-icon';
import Image from '../image';


export interface IChip {
    children: JSX.Element | JSX.Element[] | string,
    variant?: string,
    className?: string,
    size?: string,
    icon?: JSX.Element,
    image?: string,
    imgAlt?: string,
    imgTitle?: string,
    onClick?: any,
    onClose?: any,
    id?: string | number | symbol
}

const Chip = ({
    children, variant, className, 
    size, icon, image, imgAlt, imgTitle, 
    onClick, onClose, id
} : IChip) : JSX.Element => {

    const onClickAction = () : void => {
        onClick(id);
    }

    const onCloseAction = (e : any) : void => {
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
        <span onClick={(e) => onCloseAction(e)} className="chip__close-btn"></span>
    );

    return(
        <div 
            className={classes}
            onClick={onClickAction}
        >
            {renderIcon}
            {renderImage}
            <span className="chip__text">{children}</span>
            {renderClose}
        </div>
    )
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