import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';


const Image = ({
    src, alt, title, className, 
    width, height, rounded, ...attrs
}) => {

    if(!src) {
        src = `https://via.placeholder.com/${width}x${height}`;
    }

    const classes = classnames(
        'img',
        className,
        { rounded }
    );

    return(
        <img
            src={src}
            alt={alt}
            title={title} 
            className={classes}
            width={width}
            height={height}
            {...attrs}
        />
    )
}

Image.propTypes = {
    src: PropTypes.string,
    alt: PropTypes.string,
    title: PropTypes.string,
    className: PropTypes.string,
    rounded: PropTypes.bool
}

Image.defaultProps = {
    src: '',
    alt: 'image',
    title: 'image',
    className: '',
    width: 100,
    height: 100,
    rounded: false
}

export default Image;