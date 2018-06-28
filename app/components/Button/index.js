/**
*
* Button Component
*
*/

import React from 'react';
import PropTypes from 'prop-types';
import './Button.css'; // usage ${styles.button}

class Button extends React.Component { // eslint-disable-line react/prefer-stateless-function
  render() {
    const { children, color, type } = this.props;

    return (
      <div>
        <button className={`btn btn-block btn-${type} btn-${color} mb-2`}>{children}</button>
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
