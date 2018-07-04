/**
*
* Statistics
*
*/

// Libraries
import React from 'react';
import PropTypes from 'prop-types';

// Components
import { Panel } from 'react-bootstrap';

// Styles
import styles from './Statistics.css';

class Statistics extends React.Component {
  constructor() {
    super();
    this.state = {
      position: '',
    };
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    this.setState({
      position: 'relative',
    });
  }

  render() {
    const { finishedItemsPerPage, itemsPerPage, finishedItems, allItems, currentPage, allPages, color, colors } = this.props;
    return (
      <div className={`hidden ${styles.panelContainer} ${this.state.position}`}>
        <Panel>
          <Panel.Heading className={styles.panelHeading}>
            <Panel.Title componentClass="h3">Statistics</Panel.Title>
            <button onClick={this.handleClick} type="button" className={`${this.state.position === 'relative' ? 'hidden' : null} close ${styles.closeButton}`} aria-label="Close"><span aria-hidden="true">&times;</span></button>
          </Panel.Heading>
          <Panel.Body className={styles.panelBody}>Current progress <strong>{finishedItemsPerPage}</strong> from <strong>{itemsPerPage}</strong>.</Panel.Body>
          <Panel.Body className={styles.panelBody}>Overall progress <strong>{finishedItems}</strong> from <strong>{allItems}</strong>.</Panel.Body>
          <Panel.Body className={styles.panelBody}>Page <strong>{currentPage}</strong> from <strong>{allPages}</strong>.</Panel.Body>
          <Panel.Body className={styles.panelBody}>Session color is <strong>{color}</strong> from <strong>{colors.join(', ')}</strong></Panel.Body>
        </Panel>
      </div>
    );
  }
}

Statistics.propTypes = {
  finishedItemsPerPage: PropTypes.number,
  itemsPerPage: PropTypes.number,
  finishedItems: PropTypes.number,
  allItems: PropTypes.number,
  allPages: PropTypes.number,
  currentPage: PropTypes.number,
  color: PropTypes.string,
  colors: PropTypes.array,
};

export default Statistics;
