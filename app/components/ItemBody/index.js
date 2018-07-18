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
      Finish
    </div>
  );
}

ItemBody.propTypes = {
  buttonIsClicked: PropTypes.bool,
  scaleIsClicked: PropTypes.bool,
};

export default ItemBody;
