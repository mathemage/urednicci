import React from 'react';
import { Route, Switch } from 'react-router-dom';

import { Dashboard, History, MyCity } from '../containers';

const Content = () =>
    <Switch>
	    <Route exact path="/" component={Dashboard} />
        <Route path="/history/" component={History} />
        <Route path="/my-city/" component={MyCity} />
    </Switch>;

Content.propTypes = {

};

export default Content;
