import * as React from 'react';
import classnames from 'classnames';

export interface IBadge {
    value: string | number,
    className?: string,
    rounded?: boolean
}

const Badge = ({ value, className, rounded } : IBadge) => {

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