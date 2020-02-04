import * as React from 'react';
import classnames from 'classnames';

export interface TooltipProps {
    children: JSX.Element | JSX.Element[];
    className?: string;
    position?: 'top' | 'right' | 'bottom' | 'left';
    title: string;
    gap?: number;
}

const Tooltip = ({
    children, className, position, 
    title, gap
}: TooltipProps): JSX.Element => {

    const [visible, setVisibility] = React.useState(false);
    const [coords, setCoords] = React.useState({
        x: 0, 
        y: 0, 
        width: 0, 
        height: 0
    });

    const show = (e: any): void => {
        const elCoords = e.target.getBoundingClientRect();
        setCoords(elCoords);
        setVisibility(true);
    }

    const hide = (): void => {
        setVisibility(false);
    }

    const classes = classnames(
        'tooltip',
        className,
        position
    );

    const styles = (): React.CSSProperties => {
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


    const tooltip = visible && <span role="tooltip" style={styles()} className={classes}>{title}</span>;

    return(
        <React.Fragment>
            { React.Children.map(children, child => {
                return React.cloneElement(child, {
                    onMouseEnter: show,
                    onMouseLeave: hide
                })
            })}
            {tooltip}
        </React.Fragment>
    )
}

Tooltip.defaultProps = {
    children: null,
    className: '',
    position: 'bottom',
    title: 'Подсказка',
    gap: 15
}

export default Tooltip;