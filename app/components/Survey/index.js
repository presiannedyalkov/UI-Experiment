/**
*
* Survey
*
*/

// Libraries
import React from 'react';
import PropTypes from 'prop-types';

// Components
import { Button, Panel, FormGroup, ControlLabel, FormControl, HelpBlock } from 'react-bootstrap';
import { isBrowser } from 'react-device-detect';

// Styles
import styles from './Survey.css';

class Survey extends React.PureComponent {
  constructor() {
    super();
    this.state = {
      age: null,
      ageIsValid: false,
      gender: '',
      genderIsValid: false,
      device: isBrowser ? 'desktop' : 'mobile',
      deviceIsValid: true,
      items: null,
      itemsIsValid: false,
      buttonIsShown: false,
    };

    // create action controllers bound to this object
    this.changePage = this.changePage.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }

  componentDidUpdate() {
    const { ageIsValid, genderIsValid, deviceIsValid, itemsIsValid } = this.state;
    if (ageIsValid && genderIsValid && deviceIsValid && itemsIsValid) {
      this.setState({ buttonIsShown: true }); // eslint-disable-line react/no-did-update-set-state
    } else {
      this.setState({ buttonIsShown: false }); // eslint-disable-line react/no-did-update-set-state
    }
    console.log(this.state);
  }

  getValidationState(field) {
    if (field === 'age') {
      const { age } = this.state;
      if (age && (age >= 10 && age <= 100)) {
        this.setState({ ageIsValid: true });
        return 'success';
      } else if (this.state.age && (this.state.age <= 10 || this.state.age >= 100)) {
        this.setState({ ageIsValid: false });
        return 'error';
      }
      return null;
    }
    if (field === 'gender') {
      const { gender } = this.state;
      if (gender) {
        this.setState({ genderIsValid: true });
        return 'success';
      }
      return null;
    }
    if (field === 'device') {
      const { device } = this.state;
      if (device) return 'success';
      return null;
    }
    if (field === 'items') {
      const { items } = this.state;
      if (items === 0) {
        this.setState({ itemsIsValid: true });
        return 'success';
      } else if (items > 0 && items <= 100) {
        this.setState({ itemsIsValid: true });
        return 'success';
      } else if (isNaN(items)) {
        this.setState({ itemsIsValid: false });
        return 'error';
      } else if (items < 0 || items >= 100) {
        this.setState({ itemsIsValid: false });
        return 'error';
      }
      return null;
    }
    return null;
  }

  handleChange(event) {
    const currentField = event.target.name;
    const value = event.target.value;
    if (currentField === 'age') {
      this.setState({ age: parseInt(value, 10) });
    } else if (currentField === 'gender') {
      this.setState({ gender: value });
    } else if (currentField === 'device') {
      this.setState({ device: value });
    } else if (currentField === 'items') {
      this.setState({ items: parseInt(value, 10) });
    }
  }

  // This changes the items on the page and controls the button
  changePage() {
    const { age, gender, device, items } = this.state;
    this.props.handleChangeStep({ age, gender, device, items });
  }


  render() {
    const { buttonIsShown } = this.state;

    return (
      <Panel className="panel">
        <Panel.Body>
          <Panel.Title><h2>Survey</h2></Panel.Title>
        </Panel.Body>
        <Panel.Body>
          <form className={styles.form}>
            <FormGroup validationState={this.getValidationState('age')}>
              <ControlLabel htmlFor="age">Age</ControlLabel>
              <FormControl name="age" id="age" type="number" min="10" max="100" placeholder="Enter your age" onChange={this.handleChange} />
              <HelpBlock>Please choose age between 10 and 100.</HelpBlock>
            </FormGroup>
            <FormGroup validationState={this.getValidationState('gender')}>
              <ControlLabel>Gender</ControlLabel>
              <FormControl name="gender" id="gender" componentClass="select" placeholder="select" value={this.state.gender} onChange={this.handleChange} >
                <option disabled value=""></option>
                <option value="male">male</option>
                <option value="female">female</option>
                <option value="other">other</option>
                <option value="notsay">I&apos;d rather not say</option>
              </FormControl>
              <HelpBlock>Please choose one of the options.</HelpBlock>
            </FormGroup>
            <FormGroup validationState={this.getValidationState('device')}>
              <ControlLabel>Device</ControlLabel>
              <FormControl name="device" id="device" componentClass="select" placeholder="select" defaultValue={isBrowser ? 'desktop' : 'mobile'} onChange={this.handleChange} >
                <option value="mobile">mobile</option>
                <option value="desktop">desktop</option>
              </FormControl>
              <HelpBlock>Please choose one of the options.</HelpBlock>
            </FormGroup>
            <FormGroup validationState={this.getValidationState('items')}>
              <ControlLabel htmlFor="items">How many items did you buy online in the last 3 months</ControlLabel>
              <FormControl name="items" id="items" type="number" min="0" max="100" placeholder="Number of items" onChange={this.handleChange} />
              <HelpBlock>Please choose between 0 and 100 items. Exclude bulk purchases like groceries.</HelpBlock>
            </FormGroup>
          </form>
        </Panel.Body>
        <div className="clearfix">
          <Button className={`btn-secondary pull-right ${styles.button} ${!buttonIsShown ? 'invisible' : ''}`} onClick={this.changePage} href="">Next</Button>
        </div>
      </Panel>
    );
  }
}

Survey.propTypes = {
  handleChangeStep: PropTypes.func,
};

export default Survey;
