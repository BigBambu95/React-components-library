import * as React from 'react';
import classnames from 'classnames';

import SvgIcon from '../svg-icon';
import ArrowIcon from '../../icons/arrow.svg';


export interface ISelect {
    children: JSX.Element[] | JSX.Element,
    className?: string,
    defaultValue?: string | number,
    setValue?: any,
    disabled?: boolean
}

const Select = ({
    className, children, defaultValue,
    setValue, disabled
} : ISelect) : JSX.Element => {

    const container = React.useRef(null);

    const [isOpen, setIsOpen] = React.useState(false);
    const [activeItem, setActiveItem] = React.useState('');

    
    React.useEffect(() => {
        window.addEventListener('click', onClickOutsideHandler);

        return function cleanup() {
            window.removeEventListener('click', onClickOutsideHandler);
        }
    });

    function onClickOutsideHandler(e: any) {
        if(isOpen && !container.current.contains(e.target)) {
            setIsOpen(false);
        }
    }

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
            <div className="select__input" onClick={() => setIsOpen(!isOpen)}>
                <span>{activeItem || defaultValue}</span>
                <SvgIcon className="arrow-icon" component={ArrowIcon} viewBox="0 0 24 24" width="20" height="20" />
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
    setValue: () => {}
}



export default Select;