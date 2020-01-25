import * as React from 'react';
import * as ReactDOM from 'react-dom';

export interface IPortal {
    children: JSX.Element | JSX.Element[]
}

class Portal extends React.Component<IPortal> {

    el: Node

    constructor() {
        super(null || undefined);
        this.el = document.createElement('div');
    }


    componentDidMount() {
        document.body.appendChild(this.el);
    }

    componentWillUnmount() {
        document.body.removeChild(this.el);
    }

    render() {
        const { children } = this.props;

        const el = this.el as Element;

        return ReactDOM.createPortal(children, el);
    }

}

export default Portal;