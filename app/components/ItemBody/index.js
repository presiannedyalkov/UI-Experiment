/**
*
* ItemBody
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
  const { buttonIsClicked, scaleIsClicked, buttonValue, scaleValue, itemId, hierarchy } = props;

  if (!buttonIsClicked && !scaleIsClicked) {
    return <ButtonGroup {...props} />;
  } else if (buttonIsClicked && !scaleIsClicked) {
    return <Scale {...props} />;
  }
  return <div className={styles.textBox}><p>Data for Item <strong>#{itemId}</strong> is stored. <br />clicked button: <strong>{buttonValue}</strong> <br />from hierarchy <strong>#{hierarchy[0].id}: {hierarchy[0].primaryAction}, {hierarchy[0].secondaryAction}, {hierarchy[0].tertiaryAction}</strong> <br />clicked value on scale: <strong>{scaleValue}</strong></p></div>;
}

ItemBody.propTypes = {
  buttonIsClicked: PropTypes.boolean,
  scaleIsClicked: PropTypes.boolean,
  buttonValue: PropTypes.string,
  scaleValue: PropTypes.number,
  itemId: PropTypes.number,
  hierarchy: PropTypes.array,
};

export default ItemBody;
