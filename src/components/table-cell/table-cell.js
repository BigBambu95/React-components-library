import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';

const TableCell = ({
    children, className, head, 
    tag: Tag, align, size
}) => {

    const classes = classnames(
        'table-cell',
        className,
        `align-${align}`,
        size
    );

    if(head) {
        Tag = 'th';
    }

    return ( 
        <Tag className={classes}> 
            {children}
        </Tag>
    )
}

TableCell.propTypes = {
    children: PropTypes.node,
    className: PropTypes.string,
    head: PropTypes.bool,
    tag: PropTypes.string,
    align: PropTypes.oneOf(['left', 'center', 'right', 'justify']),
    size: PropTypes.oneOf(['small', 'medium'])
}

TableCell.defaultProps = {
    children: null,
    className: '',
    head: false,
    tag: 'td',
    align: 'left',
    size: 'medium'
}
 
export default TableCell;