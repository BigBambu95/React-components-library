import * as React from 'react';
import classnames from 'classnames';

import SvgIcon from '../svg-icon';


export interface IButton extends React.ButtonHTMLAttributes<JSX.Element> {
    children: JSX.Element | JSX.Element[] | string,
    className?: string,
    variant?: string,
    size?: string,
    active?: boolean,
    disabled?: boolean,
    rounded?: boolean,
    loading?: boolean,
    icon?: boolean,
    href?: string,
    onClick?: any,
}

const Button = ({ 
    children, onClick, className, variant, size, active, 
    disabled, rounded, icon, loading, href, type 
} : IButton) : JSX.Element => {

    const onClickAction = (e: any) => {
        if(disabled) {
            e.preventDefault();
        } else {
            return onClick(e);
        }
    }

    const classes = classnames(
        'btn',
        className,
        variant,
        size,
        { active },
        { disabled },
        { rounded },
        { loading }
    );

    const Tag = href ? 'a' : 'button';
    const renderIcon = icon && <span className="btn__icon"><SvgIcon Component={icon} width="100%" height="100%" viewBox="0 0 24 24" /></span>;
    const label = !loading && <span>{children}</span>;
    const loader = loading && <div className="btn__spinner"></div>;

    return (
        <Tag 
            type={type}
            className={classes} 
            onClick={onClickAction}
            disabled={disabled}
        >
            {renderIcon}
            {loader}
            {label}
        </Tag>
    )
};


Button.defaultProps = {
    children: 'Button',
    onClick: () => {},
    className: '',
    variant: 'text',
    size: '',
    active: false,
    disabled: false,
    rounded: false,
    href: '',
    icon: null,
    loading: false
}

export default Button;