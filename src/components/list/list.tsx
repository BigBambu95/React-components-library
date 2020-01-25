import * as React from 'react';
import classnames from 'classnames';

export interface IList {
    className?: string,
    children: JSX.Element | JSX.Element[],
    tag?: 'div' | 'ul'
}

const List = ({
    children, className, tag: Tag
} : IList) : JSX.Element => {

    const classes = classnames(
        'list',
        className
    );

    return(
        <Tag className={classes}>
            {
                React.Children.map(children, (child: JSX.Element) => {
                    return React.cloneElement(child, {
                        tag: Tag
                    });
                })
            }
        </Tag>
    )
}


List.defaultProps = {
    children: null,
    tag: 'ul',
    className: ''
}

export default List;