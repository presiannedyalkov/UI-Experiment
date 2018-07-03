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
import Survey from 'containers/SurveyPage/Loadable';
import NotFoundPage from 'containers/NotFoundPage/Loadable';

export default function App() {
  return (
    <div>
      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route exact path="/experiment" component={Experiment} />
        <Route exact path="/survey" component={Survey} />
        <Route component={NotFoundPage} />
      </Switch>
    </div>
  );
}
