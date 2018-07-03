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
  const { buttonIsClicked, scaleIsClicked, buttonValue, scaleValue, itemId, actionHierarchy, visualHierarchy } = props;
  const showButtons = !buttonIsClicked && !scaleIsClicked;
  const showScale = buttonIsClicked && !scaleIsClicked;

  if (showButtons) {
    return <ButtonGroup {...props} />;
  } else if (showScale) {
    return <Scale {...props} />;
  }
  return (
    <div className={styles.textBox}>
      <p>Data for Item <strong>#{itemId}</strong> is stored. <br />
      clicked button: <strong>{buttonValue}</strong> <br />
      from action hierarchy <strong>#{actionHierarchy[0].id}: {actionHierarchy[0].primaryAction}, {actionHierarchy[0].secondaryAction}, {actionHierarchy[0].tertiaryAction}</strong> <br />
      and visual hierarchy <strong>#{visualHierarchy[0].id}: {visualHierarchy[0].primaryAction}, {visualHierarchy[0].secondaryAction}, {visualHierarchy[0].tertiaryAction}</strong> <br />
      clicked value on scale: <strong>{scaleValue}</strong>
      </p>
    </div>
  );
}

ItemBody.propTypes = {
  buttonIsClicked: PropTypes.boolean,
  scaleIsClicked: PropTypes.boolean,
  buttonValue: PropTypes.string,
  scaleValue: PropTypes.number,
  itemId: PropTypes.number,
  actionHierarchy: PropTypes.array,
  visualHierarchy: PropTypes.array,
};

export default ItemBody;
