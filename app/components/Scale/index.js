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
  const scaleInput = scaleRange.map((value) => { // eslint-disable-line arrow-body-style
    return (
      <div>
        <Radio value={value} onClick={props.handleScaleClick} bsClass={styles.radio} type="radio" name="radioGroup">
          {value}
        </Radio>{' '}
      </div>
    );
  });

  return (
    <form>
      <FormGroup bsClass={styles.formgroupContainer}>
        <legend>Lorem ipsum dolor sit amet nullam sodales.</legend>
        <FormGroup bsClass={styles.formgroupScale}>
          {scaleInput}
        </FormGroup>
      </FormGroup>
    </form>
  );
}

Scale.propTypes = {
  handleScaleClick: PropTypes.object,
};

export default Scale;
