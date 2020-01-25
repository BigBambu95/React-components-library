import * as React from 'react';

import List from '../list';
import ListItem from '../list-item';

const ListPage = () => {
    return(
        <section className="list-page">
            <div>
                <h4>Стандартный список</h4>
                <List tag="div">
                    <ListItem>1л молока</ListItem>
                    <ListItem>Хлеб</ListItem>
                </List>
            </div>
        </section>
    )
}

export default ListPage;