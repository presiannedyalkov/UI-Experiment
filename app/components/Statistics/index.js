/**
*
* Statistics
*
*/

// Libraries
import React from 'react';
import PropTypes from 'prop-types';
import axios from 'axios';

// Components

// Styles
import styles from './Statistics.css';

export class Statistics extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      sessionId: props.sessionId,
      sessionColor: props.sessionColor,
      allFinishedItemsData: props.allFinishedItemsData,
      participantAge: props.participantAge,
      participantGender: props.participantGender,
      participantDevice: props.participantDevice,
      onlinePurchasingFrequency: props.onlinePurchasingFrequency,
      status: 'sending',
    };
  }

  componentWillMount() {
    axios.post('https://session-express-server.herokuapp.com/api/sessions', {
      sessionId: this.state.sessionId,
      sessionColor: this.state.sessionColor,
      allFinishedItemsData: this.state.allFinishedItemsData,
      participantAge: this.state.participantAge,
      participantGender: this.state.participantGender,
      participantDevice: this.state.participantDevice,
      onlinePurchasingFrequency: this.state.onlinePurchasingFrequency,
    })
      .then(() => {
        this.setState({ status: 'sent' });
      })
      .catch(() => {
        this.setState({ status: 'error' });
      });
  }

  render() {
    const Status = () => {
      const status = this.state.status;
      if (status === 'error') {
        return <i>An error ocurred</i>;
      } else if (status === 'sent') {
        return <i>Data is sent</i>;
      }
      return <i>Sending data...</i>;
    };
    return (
      <div className={styles.container}>
        <Status />
      </div>
    );
  }
}

Statistics.propTypes = {
  sessionId: PropTypes.number,
  sessionColor: PropTypes.string,
  allFinishedItemsData: PropTypes.string,
  participantAge: PropTypes.number,
  participantGender: PropTypes.string,
  participantDevice: PropTypes.string,
  onlinePurchasingFrequency: PropTypes.number,
};

export default Statistics;
