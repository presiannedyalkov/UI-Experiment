/*
 * HomePage
 *
 * This is the intro page
 *
 */

// Libraries
import React from 'react';

// Components
import Introduction from 'components/Introduction';

export default class HomePage extends React.PureComponent { // eslint-disable-line react/prefer-stateless-function
  render() {
    return (
      <div>
        <Introduction />
      </div>
    );
  }
}
