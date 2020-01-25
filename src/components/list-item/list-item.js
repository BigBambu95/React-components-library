import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';

const ListItem = ({
    children, tag: Tag, className
}) => {

    const classes = classnames(
        'list-item',
        className
    );

    return(
        <Tag className={classes}>
            {children}
        </Tag>
    )
}

ListItem.propTypes = {
    children: PropTypes.node,
    tag: PropTypes.oneOfType([
        PropTypes.string,
        PropTypes.func
    ]),
    className: PropTypes.string
}

ListItem.defaultProps = {
    children: null,
    tag: 'li',
    className: ''
}

export default ListItem;