import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';

const TabBarItem = ({
    children, className, activeTab, label
}) => {

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

TabBarItem.propTypes = {
    children: PropTypes.node,
    className: PropTypes.string,
    label: PropTypes.string,
    activeTab: PropTypes.string
}

TabBarItem.defaultProps = {
    children: null,
    className: '',
    label: '',
    activeTab: ''
}

export default TabBarItem;