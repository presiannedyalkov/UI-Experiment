/**
*
* AuthenticityCheck
*
*/

// Libraries
import React from 'react';
import { Radio } from 'react-bootstrap';
import PropTypes from 'prop-types';

// Components
import Success from 'components/Success';

function AuthenticityCheck(props) {
  const visibilityStyle = { visibility: props.visibility };
  return (
    <div>
      <form style={visibilityStyle}>
        <label htmlFor="authenticityCheck">Please click on the option that applies to you
          <Radio>I have followed the instructions and my answers are sincere. My data should be submited.</Radio>
          <Radio>I have not followed the instructions and my answers are not sincere. My data should not be submited.</Radio>
        </label>
      </form>
      <Success visibility={props.visibility} />
    </div>
  );
}

AuthenticityCheck.propTypes = {
  visibility: PropTypes.string,
};

export default AuthenticityCheck;
