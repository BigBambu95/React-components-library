import * as React from 'react';
import classnames from 'classnames';

export interface TabBarNavProps {
    label: string;
    className?: string;
    activeTab: string;
    disabled?: boolean;
    setActiveTab: any;
    setIndicatorCoords: any;
}

const TabBarNav = ({
    label, className, activeTab,
    disabled, setActiveTab, setIndicatorCoords
}: TabBarNavProps): JSX.Element => {

    const getCoords = (e: any): void => {
        const width = e.target.offsetWidth;
        const x = e.target.offsetLeft;
        setIndicatorCoords({
            x,
            width
        })
    }

    const handleClick = (e: Event): any => {
        setActiveTab(label);
        getCoords(e);
    }

    const classes = classnames(
        'tab',
        className,
        { disabled },
        { active: activeTab === label }
    );

    return(
        <button 
            className={classes} 
            role="tab"
            onClick={(e: any): void => handleClick(e)}
        >
            {label}
        </button>
    )
}

TabBarNav.defaultProps = {
    label: '',
    className: '',
    icon: null,
    setActiveTab: null,
    setIndicatorCoords: null
}
 
export default TabBarNav;