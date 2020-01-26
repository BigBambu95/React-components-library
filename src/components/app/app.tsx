import * as React from 'react';
import { Switch, Route } from 'react-router-dom';

import NavPanel from '../navigation-panel';
import { 
    HomePage, ButtonsPage, ButtonGroupPage, 
    ImagePage, IconPage, ChipPage, 
    BadgePage, ListPage, TooltipPage, 
    TablePage, TabsPage, SelectPage,
    FormPage
} from '../pages';


const App = () => {
    return(
        <div className="app">
            <NavPanel />
            <main className="content">
                <Switch>
                    <Route path="/" component={HomePage} exact />
                    <Route path="/button" component={ButtonsPage} />
                    <Route path="/button-group" component={ButtonGroupPage} />
                    <Route path="/image" component={ImagePage} />
                    <Route path="/icon" component={IconPage} />
                    <Route path="/chip" component={ChipPage} />
                    <Route path="/badge" component={BadgePage} />
                    <Route path="/list" component={ListPage} />
                    <Route path="/tooltip" component={TooltipPage} />
                    <Route path="/table" component={TablePage} />
                    <Route path="/tabs" component={TabsPage} />
                    <Route path="/form" component={FormPage} />
                    <Route path="/select" component={SelectPage} />
                </Switch>
            </main>
        </div>
    )
}


export default App;