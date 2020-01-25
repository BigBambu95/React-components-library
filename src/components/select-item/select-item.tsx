import * as React from 'react';
import classnames from 'classnames';


export interface ISelectItem {
    children: string,
    className?: string,
    value?: string,
    setActiveItem: any,
    setIsOpen: any,
    setValue?: any,
    disabled?: boolean
}

const SelectItem = ({
    children, className, value,
    setActiveItem, setIsOpen,
    setValue, disabled
} : ISelectItem) : JSX.Element => {

    const onClickAction = () => {
        setActiveItem(value);
        setValue(value);
        setIsOpen(false);
    }

    const classes = classnames(
        'select-item',
        className,
        { disabled }
    );

    if(!value) {
        value = children;
    }

    return(
        <div className={classes} onClick={onClickAction}>
            {children}
        </div>
    )
}


SelectItem.defaultProps = {
    children: '',
    className: '',
    disabled: false,
    setActiveItem: () => {},
    setIsOpen: () => {},
    setValue: () => {}
}

export default SelectItem;