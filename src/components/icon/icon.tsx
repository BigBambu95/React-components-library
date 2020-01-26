import * as React from 'react';
import classnames from 'classnames';

import '../../fontawesome.min.css';

export interface IIcon {
    name: string,
    className?: string
}

const Icon = ({
   name, className,
} : IIcon) : JSX.Element => {

    const classes = classnames(
        'fas',
        `fa-${name}`,
        className
    );

    return <i className={classes}></i>;
}

export default Icon;