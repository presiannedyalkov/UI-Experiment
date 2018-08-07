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
    <form className={props.className}>
      <FormGroup bsClass={styles.formgroupContainer}>
        <legend>How likely are you to buy this item within the next 3 months in real life?</legend>
        <FormGroup bsClass={styles.formgroupScale}>
          {scaleInput}
        </FormGroup>
      </FormGroup>
    </form>
  );
}

Scale.propTypes = {
  handleScaleClick: PropTypes.func,
  className: PropTypes.string,
};

export default Scale;
