import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';

const TabBarNav = ({
    label, className, icon, activeTab,
    disabled, setActiveTab, setIndicatorCoords
}) => {

    const getCoords = (e) => {
        const width = e.target.offsetWidth;
        const x = e.target.offsetLeft;
        setIndicatorCoords({
            x,
            width
        })
    }

    const handleClick = (e) => {
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
            onClick={(e) => handleClick(e)}
        >
            {label}
        </button>
    )
}

TabBarNav.propTypes = {
    label: PropTypes.string.isRequired,
    className: PropTypes.string,
    icon: PropTypes.element,
    setActiveTab: PropTypes.func.isRequired,
    setIndicatorCoords: PropTypes.func.isRequired
}

TabBarNav.defaultProps = {
    label: '',
    className: '',
    icon: null,
    setActiveTab: () => {},
    setIndicatorCoords: () => {}
}
 
export default TabBarNav;