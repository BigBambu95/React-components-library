import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';

const TableRow = ({
    children, className, head, size
}) => {   

    const classes = classnames(
        'table-row',
        className
    );

    return(
        <tr className={classes}>
            {
                React.Children.map(children, child => {
                    return React.cloneElement(child, {
                        head,
                        size
                    })
                })
            }
        </tr>
    )
}

TableRow.propTypes = {
    children: PropTypes.oneOfType([
        PropTypes.node,
        PropTypes.array
    ]),
    className: PropTypes.string,
    head: PropTypes.bool,
    size: PropTypes.oneOf(['small', 'medium'])
}

TableRow.defaultProps = {
    children: null,
    className: '',
    head: false,
    size: 'medium'
}

export default TableRow;