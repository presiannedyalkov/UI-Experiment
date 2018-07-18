/**
*
* Scale Component
*
*/

// Libraries
import React from 'react';
import PropTypes from 'prop-types';

// Components
import { FormGroup, Radio } from 'react-bootstrap';

// Styles
import styles from './Scale.css';

function Scale(props) {
  const scaleRange = [1, 2, 3, 4, 5, 6];
  const handleScaleClick = props.handleScaleClick;
  const scaleInput = scaleRange.map((value) => { // eslint-disable-line arrow-body-style
    return (
      <div key={value.toString()}>
        <Radio value={value} onClick={handleScaleClick} bsClass={styles.radio} type="radio" name="radioGroup">
        </Radio>{' '}
      </div>
    );
  });

  return (
    <form>
      <FormGroup bsClass={styles.formgroupContainer}>
        <legend>How likely are you to purchase this item in the next 6 months?</legend>
        <FormGroup bsClass={styles.formgroupScale}>
          {scaleInput}
        </FormGroup>
      </FormGroup>
    </form>
  );
}

Scale.propTypes = {
  handleScaleClick: PropTypes.func,
};

export default Scale;
