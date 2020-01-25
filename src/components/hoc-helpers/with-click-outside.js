import React, { useEffect, useRef } from 'react';

const withClickOutside = (state, setState) => WrappedComponent => {
    return (props) => {
        const container = useRef();

        useEffect(() => {
            window.addEventListener('click', onClickOutsideHandler);
    
            return function cleanup() {
                window.removeEventListener('click', onClickOutsideHandler);
            }
        });

        
        function onClickOutsideHandler(e) {
            if(state && !container.current.contains(e.target)) {
                setState(false);
            }
        }
    
        return <WrappedComponent ref={container} {...props} />
    }
}

export default withClickOutside;