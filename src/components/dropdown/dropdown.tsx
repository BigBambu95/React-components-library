import * as React from 'react';

export interface DropdownProps {
    children: JSX.Element | JSX.Element[];
    overlay?: JSX.Element | JSX.Element[];
    trigger: string;
}

const Dropdown = ({
    children, overlay, trigger
}: DropdownProps): JSX.Element => {

    const container = React.useRef(null);

    const [isOpen, setIsOpen] = React.useState(false);

    function onClickOutsideHandler(e: Event): void {
        if(isOpen && !container.current.contains(e.target)) {
            setIsOpen(false);
        }
    }

    React.useEffect(() => {
        window.addEventListener('click', onClickOutsideHandler);
        window.addEventListener('contextmenu', onClickOutsideHandler);

        return function cleanup(): void {
            window.removeEventListener('click', onClickOutsideHandler);
            window.removeEventListener('contextmenu', onClickOutsideHandler);
        }
    });

    const show = (e: any): void => {
        e.preventDefault();
        setIsOpen(true);
    }

    const hide = (): void => {
        setIsOpen(false);
    }

    const content = isOpen && overlay;

    const eventHandler = () => {
        switch(trigger) {
            case 'hover': 
                return {
                    onMouseEnter: show,
                    onMouseLeave: hide
                }
            case 'click':
                return {
                    onClick: show
                }
            case 'contextMenu': 
                return {
                    ref: container,
                    onContextMenu: show
                }
        }
    }

    return(
        <React.Fragment>
            {
                React.Children.map(children, (child: JSX.Element) => {
                    return React.cloneElement(child, eventHandler());
                })
            }
            {content}
        </React.Fragment>
    )
}

Dropdown.defaultProps = {
    trigger: 'hover'
}

export default Dropdown;