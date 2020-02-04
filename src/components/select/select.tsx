import * as React from 'react';
import classnames from 'classnames';

export interface SelectProps {
    children: JSX.Element[] | JSX.Element;
    className?: string;
    defaultValue?: string | number;
    setValue?: any;
    disabled?: boolean;
}

const Select = ({
    className, children, defaultValue,
    setValue, disabled
}: SelectProps): JSX.Element => {

    const container = React.useRef(null);

    const [isOpen, setIsOpen] = React.useState(false);
    const [activeItem, setActiveItem] = React.useState('');

    function onClickOutsideHandler(e: Event): void {
        if(isOpen && !container.current.contains(e.target)) {
            setIsOpen(false);
        }
    }
    
    React.useEffect(() => {
        window.addEventListener('click', onClickOutsideHandler);

        return function cleanup(): void {
            window.removeEventListener('click', onClickOutsideHandler);
        }
    });

    const classes = classnames(
        'select',
        className,
        { 'visibility': isOpen },
        { disabled }
    );

    const selectList = isOpen && (
        <div className="select__list">
            { React.Children.map(children, child => React.cloneElement(child, { setActiveItem, setIsOpen, setValue })) }
        </div>
    );

    return(
        <div className={classes} ref={container}>
            <div className="select__input" onClick={(): void => setIsOpen(!isOpen)}>
                <span>{activeItem || defaultValue}</span>
                <span className="select__arrow"></span>
            </div>
            {selectList}
            <input type="hidden" value={activeItem} />
        </div>
    )
}

Select.defaultProps = {
    children: null,
    className: '',
    defaultValue: 'Выберите',
    setValue: (a: any): void => a
}



export default Select;