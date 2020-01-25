import React, { useState, useEffect, useRef } from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import TabBarNav from '../tab-bar-nav';


const TabBar = ({
    children, className, orientation
}) => {

    const [activeTab, setActiveTab] = useState(getChildrenLabels(children)[0]);
    const [indicatorCoords, setIndicatorCoords] = useState({ x: 0, width: 0 });

    const tabBarRef = useRef();

    useEffect(() => {
        const x = tabBarRef.current.firstChild.firstChild.offsetLeft;
        const width = tabBarRef.current.firstChild.firstChild.offsetWidth;
        setIndicatorCoords({ x, width });
    }, []);

    function getChildrenLabels (children) {
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
        return getChildrenLabels(children).map(label => {
            return(
                <TabBarNav 
                    key={label} 
                    label={label}
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

TabBar.propTypes = {
    children: PropTypes.arrayOf(PropTypes.element),
    className: PropTypes.string,
    orientation: PropTypes.oneOf(['horizontal', 'vertical'])
}

TabBar.defaultProps = {
    children: null,
    className: '',
    orientation: 'horizontal'
}

export default TabBar;