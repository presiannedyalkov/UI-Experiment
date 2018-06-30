/*
 * HomePage
 *
 * This is the first thing users see of our App, at the '/' route
 *
 */

import React from 'react';
import List from 'components/List';

const divStyle = {
  padding: '50px 0',
};

export default class HomePage extends React.PureComponent { // eslint-disable-line react/prefer-stateless-function
  render() {
    return (
      <div style={divStyle}>
        <List />
      </div>
    );
  }
}
