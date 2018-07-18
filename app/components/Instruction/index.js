/**
*
* Instruction
*
*/

// Libraries
import React from 'react';
import PropTypes from 'prop-types';

// Components
import { Button, Panel } from 'react-bootstrap';

// Styles
import styles from './Instruction.css';

function Instruction(props) {
  const handleChangeStep = props.handleChangeStep;
  return (
    <Panel className={styles.panel}>
      <Panel.Body>
        <Panel.Title><h2>Instructions</h2></Panel.Title>
      </Panel.Body>
      <Panel.Body>
          Under each item you will find three buttons corresponding to three different
          actions &mdash; you can <strong>&quot;Buy&quot;</strong> an item, <strong>&quot;Add&quot;</strong> it to a wish list
          for later purchase, or if you are not interested in the item and choose none of the above you can <strong>&quot;Skip&quot;</strong>.
          Please indicate for each of the following items how likely you are to purchase the item
          by choosing the adequate value on a scale ranging from <strong>very unlikely</strong> to <strong>very
          likely</strong>, regardless of the button you have clicked.<br /><br />
          Please answer all questions truthfully and as spontaneously as possible.
      </Panel.Body>
      <div className="clearfix">
        <Button onClick={handleChangeStep} className={`btn-secondary pull-right ${styles.button}`} href="">Start</Button>
      </div>
    </Panel>
  );
}

Instruction.propTypes = {
  handleChangeStep: PropTypes.func,
};

export default Instruction;
