import * as React from 'react';
import classnames from 'classnames';

export interface TableProps {
    children: JSX.Element,
    className: string,
    size: string
}

const Table = ({ children, className, size }: TableProps) => {

    const classes = classnames(
        'table',
        className
    );

    return(
        <table className={classes}>
            {
                React.Children.map(children, (child: JSX.Element) => {
                    return React.cloneElement(child, {
                        size
                    })
                })
            }
        </table>
    )
}


Table.defaultProps = {
    children: null,
    className: '',
    size: 'medium'
}

export default Table;