import * as React from 'react';
import classnames from 'classnames';


export interface ISvgIcon extends React.SVGAttributes<JSX.Element> {
    component: JSX.Element,
}

const SvgIcon = ({ 
    component : Component, className, width, height, fill, viewBox 
} : ISvgIcon) : JSX.Element => {

    const classes = classnames(
        'svg-icon',
        className
    );

    return(
        <Component 
            className={classes}
            width={width} 
            height={height}
            viewBox={viewBox}
            fill={fill}
        />
    )
}

SvgIcon.defaultProps = {
    width: '32',
    height: '32',
    viewBox: '0 0 32 32',
    className: '',
    fill: null
}

export default SvgIcon;