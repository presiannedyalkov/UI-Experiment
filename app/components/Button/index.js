/**
*
* Button
*
*/

import React from 'react';
import PropTypes from 'prop-types';

// import styled from 'styled-components';

// import { FormattedMessage } from 'react-intl';
// import messages from './messages';

class Button extends React.Component { // eslint-disable-line react/prefer-stateless-function
  render() {
    const { children, color, type } = this.props;
    // Return an element describing a
    // <button class="btn">{children}</button>
    return (
      <div>
        <button className={`btn btn-block btn-${type}  btn-${color} mb-2`}>{children}</button>
      </div>
    );
  }
}

Button.propTypes = {
  type: PropTypes.string,
  color: PropTypes.string,
  children: PropTypes.string,
};

export default Button;
