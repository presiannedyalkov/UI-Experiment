/**
*
* ItemBody component
*
*/

// Libraries
import React from 'react';
import PropTypes from 'prop-types';

// Components
import ButtonGroup from 'components/ButtonGroup';
import Scale from 'components/Scale';

// Styles
import styles from './ItemBody.css';

function ItemBody(props) {
  const { buttonIsClicked, scaleIsClicked } = props;
  const showButtons = !buttonIsClicked && !scaleIsClicked;
  const showScale = buttonIsClicked && !scaleIsClicked;

  if (showButtons) {
    return <ButtonGroup {...props} />;
  } else if (showScale) {
    return <Scale {...props} />;
  }
  return (
    <div className={styles.textBox}>
      <svg xmlns="http://www.w3.org/2000/svg" width="100%" viewBox="-13 0 50 30"><path fill="#f1f1f1" d="M12 0c-6.627 0-12 5.373-12 12s5.373 12 12 12 12-5.373 12-12-5.373-12-12-12zm-1.25 17.292l-4.5-4.364 1.857-1.858 2.643 2.506 5.643-5.784 1.857 1.857-7.5 7.643z" /></svg>
    </div>
  );
}

ItemBody.propTypes = {
  buttonIsClicked: PropTypes.bool,
  scaleIsClicked: PropTypes.bool,
};

export default ItemBody;
