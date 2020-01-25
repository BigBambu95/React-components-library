import * as React from 'react';
import classnames from 'classnames';

export interface IListItem {
    children?: JSX.Element | JSX.Element[] | string,
    tag?: 'string',
    className: string
}

const ListItem = ({
    children, tag, className
} : IListItem) : JSX.Element => {

    const classes = classnames(
        'list-item',
        className
    );

    const Tag = tag.toString() === 'ul' ? 'li' : 'div';

    return(
        <Tag className={classes}>
            {children}
        </Tag>
    )
}


ListItem.defaultProps = {
    children: null,
    tag: 'li',
    className: ''
}

export default ListItem;