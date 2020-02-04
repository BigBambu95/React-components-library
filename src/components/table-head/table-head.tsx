import * as React from 'react';
import classnames from 'classnames';

export interface TableHeadProps {
    children: JSX.Element | JSX.Element[];
    className: string;
    size: 'small' | 'medium';
}

const TableHead = ({
    children, className, size
}: TableHeadProps): JSX.Element => {

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

TableHead.defaultProps = {
    children: null,
    className: '',
    size: 'medium'
}

export default TableHead;