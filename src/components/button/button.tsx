import * as React from 'react';
import classnames from 'classnames';

export interface ButtonProps extends React.ButtonHTMLAttributes<JSX.Element> {
    children: JSX.Element | JSX.Element[] | string;
    className?: string;
    variant?: string;
    size?: string;
    active?: boolean;
    disabled?: boolean;
    rounded?: boolean;
    loading?: boolean;
    href?: string;
    onClick?: any;
}

const Button = ({ 
    children, onClick, className, variant, size, active, 
    disabled, rounded, loading, href, type 
}: ButtonProps): JSX.Element => {

    const onClickAction = (e: any): void => {
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
    const label = !loading && <span>{children}</span>;
    const loader = loading && <div className="btn__spinner"></div>;

    return (
        <Tag 
            type={type}
            className={classes} 
            onClick={onClickAction}
            href={href}
            disabled={disabled}
        >
            {loader}
            {label}
        </Tag>
    )
};


Button.defaultProps = {
    children: 'Button',
    onClick: (a: any): void => a,
    className: '',
    variant: 'text',
    size: '',
    active: false,
    disabled: false,
    rounded: false,
    href: null,
    loading: false
}

export default Button;