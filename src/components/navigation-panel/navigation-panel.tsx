import * as React from 'react';
import { Link } from 'react-router-dom';

import routes from '../../routes';


const NavPanel = () => {
    return(
        <aside className="nav-panel">
            {
                routes.map(({ path, text, id }) => {
                    return (
                        <div key={id} className="nav-panel__item">
                            <Link to={path} className="link">{text}</Link>
                        </div>
                    )
                })
            }
        </aside>
    )
};

export default NavPanel;