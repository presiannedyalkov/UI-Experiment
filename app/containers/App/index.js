/**
 *
 * App.js
 *
 * This component is the skeleton around the actual pages, and should only
 * contain code that should be seen on all pages. (e.g. navigation bar)
 *
 */

import React from 'react';
import { Switch, Route } from 'react-router-dom';

import HomePage from 'containers/HomePage/Loadable';
import Experiment from 'containers/ExperimentPage/Loadable';
import ThankYou from 'containers/ThankYou/Loadable';
import NotFoundPage from 'containers/NotFoundPage/Loadable';

export default function App() {
  return (
    <div>
      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route exact path="/experiment" component={Experiment} />
        <Route path="/thankyou" component={ThankYou} />
        <Route component={NotFoundPage} />
      </Switch>
    </div>
  );
}
