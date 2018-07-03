/*
 * Survey
 *
 * This is the post-experiment survey, at the '/survey' route
 *
 */

// Libraries
import React from 'react';

// Components
import Survey from 'components/Survey';

export default class SurveyPage extends React.PureComponent { // eslint-disable-line react/prefer-stateless-function
  render() {
    return (
      <div>
        <Survey />
      </div>
    );
  }
}
