/**
*
* Item Container
*
*/

// Libraries
import React from 'react';
import PropTypes from 'prop-types';

// Components
import { Panel, Col } from 'react-bootstrap';
import ItemBody from 'components/ItemBody';

// Styles
import styles from './Item.css';

class Item extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      id: props.id,
      text: props.text,
      category: props.category,
      buttonIsClicked: false,
      visualTypeValue: '',
      actionTypeValue: '',
      scaleIsClicked: false,
      scaleValue: null,
    };
    this.handleButtonClick = this.handleButtonClick.bind(this);
    this.handleScaleClick = this.handleScaleClick.bind(this);
  }

  handleButtonClick(event) {
    this.setState({
      buttonIsClicked: true,
      visualTypeValue: event.currentTarget.dataset.visualType,
      actionTypeValue: event.currentTarget.dataset.actionType,
    });
  }
  handleScaleClick(event) {
    this.setState({
      scaleIsClicked: true,
      scaleValue: parseInt(event.currentTarget.value, 10),
    });
    this.props.handleFinishWithItem(this.state);
  }

  render() {
    const { text, buttonIsClicked, scaleIsClicked, visualTypeValue, actionTypeValue, scaleValue } = this.state;

    return (
      <Col sm={6} md={4} className={styles.col}>
        <Panel className="text-center">
          <div className={styles.titleContainer}>
            <Panel.Title className={styles.itemTitle}>{text}</Panel.Title>
          </div>
          <ItemBody actionTypeValue={actionTypeValue} visualTypeValue={visualTypeValue} scaleValue={scaleValue} buttonIsClicked={buttonIsClicked} handleButtonClick={this.handleButtonClick} scaleIsClicked={scaleIsClicked} handleScaleClick={this.handleScaleClick} {...this.props} />
        </Panel>
      </Col>
    );
  }
}

Item.propTypes = {
  id: PropTypes.number,
  text: PropTypes.string,
  category: PropTypes.string,
  handleFinishWithItem: PropTypes.func,
};

export default Item;
