/**
 * ThankYou
 *
 * This is the final page where we lift the deception and share the real purpose
 * of the experiment. It gives an option to the participant to receive the
 * results of the study.
 *
 */

// Libraries
import React from 'react';

// Components
import ThankYou from 'components/ThankYou';

export default class ThankYouPage extends React.PureComponent { // eslint-disable-line react/prefer-stateless-function
  render() {
    return (
      <div>
        <ThankYou />
      </div>
    );
  }
}
