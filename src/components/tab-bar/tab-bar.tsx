import * as React from 'react';
import classnames from 'classnames';
import TabBarNav from '../tab-bar-nav';

import { ITabBarItem } from '../tab-bar-item/tab-bar-item';


export interface ITabBar {
    children: JSX.Element[],
    className?: string,
    orientation?: 'horizontal' | 'vertical'
}

const TabBar = ({
    children, className, orientation
} : ITabBar) : JSX.Element => {

    const [activeTab, setActiveTab] = React.useState(getChildrenLabels(children)[0].props.label);
    const [indicatorCoords, setIndicatorCoords] = React.useState({ x: 0, width: 0 });

    const tabBarRef = React.useRef(null);

    React.useEffect(() => {
        const x = tabBarRef.current.firstChild.firstChild.offsetLeft;
        const width = tabBarRef.current.firstChild.firstChild.offsetWidth;
        setIndicatorCoords({ x, width });
    }, []);

    function getChildrenLabels(children : JSX.Element[]) : JSX.Element[] {
        return children.map(({ props }) => props.label);
    }

    const classes = classnames(
        'tab-bar',
        className,
        orientation
    );

    const tabBarIndicatorStyles = {
        left: indicatorCoords.x,
        width: indicatorCoords.width
    }

    const renderTabs = () => {
        return getChildrenLabels(children).map(({props} : JSX.Element) => {
            return(
                <TabBarNav 
                    key={props.label} 
                    label={props.label}
                    activeTab={activeTab} 
                    setActiveTab={setActiveTab} 
                    setIndicatorCoords={setIndicatorCoords}
                />
            )
        })
    }

    return(
        <div className={classes} ref={tabBarRef}>
            <div className="tab-bar__nav-panel">
                { renderTabs() }
                <span className="tab-bar__indicator" style={tabBarIndicatorStyles}></span>
            </div>
            {
                React.Children.map(children, child => {
                    return React.cloneElement(child, {
                        activeTab
                    })
                })
            }
        </div>
    )
}


TabBar.defaultProps = {
    children: null,
    className: '',
    orientation: 'horizontal'
}

export default TabBar;