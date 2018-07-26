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
      visualHierarchy: null,
      visualTypeValue: '',
      actionHierachy: '',
      actionTypeValue: '',
      scaleIsClicked: false,
      scaleValue: 0,
    };
    this.handleButtonClick = this.handleButtonClick.bind(this);
    this.handleScaleClick = this.handleScaleClick.bind(this);
  }

  handleButtonClick(event) {
    this.setState({
      buttonIsClicked: true,
      visualHierarchy: parseInt(event.currentTarget.dataset.visualHierarchy, 10),
      visualTypeValue: event.currentTarget.dataset.visualType,
      actionHierarchy: parseInt(event.currentTarget.dataset.actionHierarchy, 10),
      actionTypeValue: event.currentTarget.dataset.actionType,
    });
  }
  handleScaleClick(event) {
    this.setState({
      scaleIsClicked: true,
      scaleValue: parseInt(event.currentTarget.value, 10),
    },
    () => this.props.handleFinishWithItem(this.state)
    );
  }

  render() {
    return (
      <Col sm={6} md={4} className={styles.col}>
        <Panel className="text-center">
          <div className={styles.titleContainer}>
            <Panel.Title className={styles.itemTitle}>{this.state.text}</Panel.Title>
          </div>
          <ItemBody handleButtonClick={this.handleButtonClick} handleScaleClick={this.handleScaleClick} {...this.state} {...this.props} />
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
