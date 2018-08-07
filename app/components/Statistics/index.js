/**
*
* Statistics
*
*/

// Libraries
import React from 'react';
import PropTypes from 'prop-types';
import axios from 'axios';

// Styles
import styles from './Statistics.css';

class Statistics extends React.Component {
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
      participated: props.participated,
      status: 'sending',
    };
  }

  componentWillMount() {
    axios.post('https://sessions-express-server-2.herokuapp.com/api/sessions', {
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
        window.location.replace('/thankyou?sent=true');
      })
      .catch(() => {
        this.setState({ status: 'error' });
        window.location.replace('/thankyou?error=true');
      });
  }

  render() {
    const Status = () => {
      const status = this.state.status;
      if (status === 'error') {
        return <i className={styles.iconError}>An error occurred</i>;
      } else if (status === 'sent') {
        return <i className={styles.iconDone}>Data is sent</i>;
      }
      return <i className={styles.iconUploading}>Sending data...</i>;
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
  participated: PropTypes.bool,
};

export default Statistics;
