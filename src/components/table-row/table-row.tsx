import * as React from 'react';
import classnames from 'classnames';

export interface ITableRow {
    children: JSX.Element | JSX.Element[],
    className: string,
    head: boolean,
    size: 'small' | 'medium'
}

const TableRow = ({
    children, className, head, size
} : ITableRow) : JSX.Element => {   

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


TableRow.defaultProps = {
    children: null,
    className: '',
    head: false,
    size: 'medium'
}

export default TableRow;