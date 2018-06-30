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
  constructor() {
    super();
    this.state = {
      buttonIsClicked: false,
      buttonValue: '',
      scaleIsClicked: false,
      scaleValue: 0,
    };
    this.handleButtonClick = this.handleButtonClick.bind(this);
    this.handleScaleClick = this.handleScaleClick.bind(this);
  }
  handleButtonClick(event) {
    this.setState({
      buttonIsClicked: true,
      buttonValue: event.currentTarget.value,
    });
  }
  handleScaleClick(event) {
    this.setState({
      scaleIsClicked: true,
      scaleValue: event.currentTarget.value,
    });
    this.props.handleFinishWithItem();
  }

  render() {
    const { buttonIsClicked, scaleIsClicked, buttonValue, scaleValue } = this.state;
    const { id, text, hierarchyId } = this.props;

    return (
      <Col sm="6" md="4" className={styles.col}>
        <Panel className="text-center">
          <div className={styles.titleContainer}>
            <Panel.Title className={styles.itemTitle}><strong>#{id}</strong><br />{text}</Panel.Title>
          </div>
          <ItemBody hierarchyId={hierarchyId} buttonValue={buttonValue} itemId={id} scaleValue={scaleValue} buttonIsClicked={buttonIsClicked} handleButtonClick={this.handleButtonClick} scaleIsClicked={scaleIsClicked} handleScaleClick={this.handleScaleClick} {...this.props} />
        </Panel>
      </Col>
    );
  }
}

Item.propTypes = {
  text: PropTypes.string,
  id: PropTypes.number,
  hierarchyId: PropTypes.number,
  handleFinishWithItem: PropTypes.function,
};

export default Item;
