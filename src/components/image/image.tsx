import * as React from 'react';
import classnames from 'classnames';

export interface ImageProps extends React.ImgHTMLAttributes<JSX.Element> {
    title?: string;
    className?: string;
    rounded?: boolean;
}

const Image = ({
    src, alt, title, className, 
    width, height, rounded
}: ImageProps): JSX.Element => {

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
        />
    )
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