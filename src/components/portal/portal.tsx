import * as React from 'react';
import * as ReactDOM from 'react-dom';

class Portal extends React.Component<JSX.ElementClass> {
    constructor() {
        super(this.props);
        this.el = el;
        el = document.createElement('div');
    }


    componentDidMount() {
        document.body.appendChild(this.el);
    }

    componentWillUnmount() {
        document.body.removeChild(this.el);
    }

    render() {
        const { children } = this.props;

        return ReactDOM.createPortal(
            children,
            this.el
        )
    }

}

export default Portal;