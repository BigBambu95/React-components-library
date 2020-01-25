import * as React from 'react';
import classnames from 'classnames';

export interface ITabBarItem {
    children?: JSX.Element | JSX.Element[] | string,
    className?: string,
    activeTab: string,
    label: string
}

const TabBarItem = ({
    children, className, activeTab, label
} : ITabBarItem) : JSX.Element => {

    const classes = classnames(
        'tab-bar-item',
        className,
    )

    if(activeTab !== label) return null; 

    return(
        <div className={classes}>
            {children}
        </div>
    )
}

TabBarItem.defaultProps = {
    children: null,
    className: '',
    label: '',
    activeTab: ''
}

export default TabBarItem;