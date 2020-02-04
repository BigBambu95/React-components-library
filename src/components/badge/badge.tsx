import * as React from 'react';
import classnames from 'classnames';

export interface BadgeProps {
    value: string | number;
    className?: string;
    rounded?: boolean;
}

const Badge = ({ value, className, rounded }: BadgeProps): JSX.Element => {

    const classes = classnames(
        'badge',
        className,
        { rounded }
    )

    return(
        <span className={classes}>
            {value}
        </span>
    )
}

Badge.defaultProps = {
    rounded: false,
    className: '',
}

export default Badge;