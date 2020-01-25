import React from 'react';
import TabBar from '../tab-bar';
import TabBarItem from '../tab-bar-item';
import Image from '../image';

const TabsPage = () => {
    return(
        <section>
            <div>
                <h4>Простые вкладки</h4>
                <TabBar>
                    <TabBarItem label="Item one">
                        <Image 
                            src="https://cdn.pixabay.com/photo/2016/02/27/06/43/cherry-tree-1225186_960_720.jpg" 
                            alt="Вишневое дерево" 
                            title="Вишневое дерево" 
                            width="300" 
                            height="auto" 
                        />
                    </TabBarItem>
                    <TabBarItem label="Item two">Item two</TabBarItem>
                    <TabBarItem label="Item three">Item three</TabBarItem>
                </TabBar>
            </div>
        </section>
    )
}


export default TabsPage;