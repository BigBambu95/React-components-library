import * as React from 'react';
import classnames from 'classnames';

export interface ITableCell {
    children: JSX.Element | string,
    className?: string,
    tag?: 'th' | 'td',
    align?: 'left' | 'center' | 'right' | 'justify',
    size?: 'small' | 'medium',
    head?: boolean
}

const TableCell = ({
    children, className, head, 
    tag: Tag, align, size
} : ITableCell) : JSX.Element => {

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


TableCell.defaultProps = {
    children: null,
    className: '',
    head: false,
    tag: 'td',
    align: 'left',
    size: 'medium'
}
 
export default TableCell;