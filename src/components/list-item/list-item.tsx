import * as React from 'react';
import classnames from 'classnames';

export interface ListItemProps {
    children?: JSX.Element | JSX.Element[] | string;
    tag?: 'string';
    className: string;
}

const ListItem = ({
    children, tag, className
}: ListItemProps): JSX.Element => {

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