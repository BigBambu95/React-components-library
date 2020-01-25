import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';

const List = ({
    children, tag: Tag, className, ...attrs
}) => {

    const classes = classnames(
        'list',
        className
    );

    return(
        <Tag className={classes} {...attrs}>
            {children}
        </Tag>
    )
}

List.propTypes = {
    children: PropTypes.node,
    tag: PropTypes.oneOfType([
        PropTypes.string,
        PropTypes.func
    ]),
    className: PropTypes.string
}

List.defaultProps = {
    children: null,
    tag: 'ul',
    className: ''
}

export default List;