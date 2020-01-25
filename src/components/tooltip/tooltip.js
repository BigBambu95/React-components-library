import React, { useState, Fragment, Children, cloneElement } from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';


const Tooltip = ({
    children, className, position, 
    title, gap, ...attrs
}) => {

    const [visible, setVisibility] = useState(false);
    const [coords, setCoords] = useState({});

    const show = (e) => {
        const elCoords = e.target.getBoundingClientRect();
        setCoords(elCoords);
        setVisibility(true);
    }

    const hide = () => {
        setVisibility(false);
    }

    const classes = classnames(
        'tooltip',
        className,
        position
    );

    const styles = () => {
        switch(position) {
            case 'bottom':
                return {
                    left: coords.x + coords.width / 2,
                    top: coords.y + coords.height + gap
                }

            case 'right':
                return {
                    left: coords.x + coords.width + gap,
                    top: coords.y + coords.height / 2
                }

            case 'left':
                return {
                    left: coords.x - gap,
                    top: coords.y + coords.height / 2
                }

            case 'top':
                return {
                    left: coords.x + coords.width / 2,
                    top: coords.y - coords.height / 2 - gap
                }
        }
    }


    const tooltip = visible && <span role="tooltip" style={styles()} className={classes} {...attrs}>{title}</span>;

    return(
        <Fragment>
            {Children.map(children, child => {
                return cloneElement(child, {
                    onMouseEnter: show,
                    onMouseLeave: hide
                })
            })}
            {tooltip}
        </Fragment>
    )
}

Tooltip.propTypes = {
    children: PropTypes.node.isRequired,
    className: PropTypes.string,
    position: PropTypes.oneOf(['top', 'right', 'bottom', 'left']),
    title: PropTypes.string,
    gap: PropTypes.number
}

Tooltip.defaultProps = {
    children: null,
    className: '',
    position: 'bottom',
    title: 'Подсказка',
    gap: 15
}

export default Tooltip;