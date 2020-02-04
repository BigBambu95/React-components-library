import * as React from 'react';
import List from '../list';
import ListItem from '../list-item';
import Dropdown from '../dropdown';
import Button from '../button';

const DropdownPage = (): JSX.Element => {

    const menu = (
        <List>
            <ListItem>Item one</ListItem>
            <ListItem>Item two</ListItem>
            <ListItem>Item three</ListItem>
        </List>
    );


    return(
        <section>
            <Dropdown overlay={menu} trigger="contextMenu">
                <div style={{
                    width: '500px',
                    height: '250px',
                    background: '#ccc',
                    textAlign: 'center',
                    lineHeight: '250px',
                    color: '#fff'
                }}
                >
                    Кликните правой клавишей
                </div>
            </Dropdown>
        </section>
    )
}

export default DropdownPage;