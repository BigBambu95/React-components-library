import * as React from 'react';
import classnames from 'classnames';

export interface TableBodyProps {
    children: JSX.Element | JSX.Element[];
    className?: string;
    size?: 'small' | 'medium';
}

const TableBody = ({
    children, className, size
}: TableBodyProps): JSX.Element => {

    const classes = classnames(
        'table-body',
        className
    );

    return (
        <tbody className={classes}>
            {
                React.Children.map(children, (child: JSX.Element) => {
                    return React.cloneElement(child, { size })
                })
            }
        </tbody>
    )
}

TableBody.defaultProps = {
    children: null,
    className: '',
    size: 'medium'
}
 
export default TableBody;