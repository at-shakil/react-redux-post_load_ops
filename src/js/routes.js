import React from 'react';
import { Route, IndexRoute, Redirect } from 'react-router';
import { Home } from './components';

import App from './components/App';
import NotFoundView from './views/NotFoundView';

export default (
  <Route path="/" component={App}>
    <IndexRoute component={Home} />
    <Route path="404" component={NotFoundView} />
    <Redirect from="*" to="404" />
  </Route>
);
