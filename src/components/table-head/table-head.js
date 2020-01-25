import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';

const TableHead = ({
    children, className, size
}) => {

    const classes = classnames(
        'table-head',
        className
    );

    return(
        <thead className={classes}>
            {
                React.Children.map(children, child => {
                    return React.cloneElement(child, {
                        head: true,
                        size
                    })
                })
            }
        </thead>
    )
}

TableHead.propTypes = {
    children: PropTypes.node,
    className: PropTypes.string,
    size: PropTypes.oneOf(['small', 'medium'])
}

TableHead.defaultProps = {
    children: null,
    className: '',
    size: 'medium'
}

export default TableHead;