/**
 *
 * Experiment
 *
 */

// Libraries
import React from 'react';
import Cookies from 'universal-cookie';

// Components
import { Grid, Row } from 'react-bootstrap';
import Header from 'components/Header';
import Instruction from 'components/Instruction';
import ItemList from 'containers/ItemList';
import AuthenticityCheck from 'components/AuthenticityCheck';
import Survey from 'containers/Survey';
import Statistics from 'components/Statistics';

class Experiment extends React.PureComponent {
  static serialize(array) {
    const object = array.reduce((acc, curr, i) => {
      const accumulator = acc;
      accumulator[i] = curr;
      return accumulator;
    }, {});
    return JSON.stringify(object);
  }

  // Change 0x10 and the substring values for longer/shorter id
  static uniqueId() {
    const createRandomUUID = () => parseInt(Math.floor((1 + Math.random()) * 0x1000000000).toString().slice(-8), 10);
    let uuid = createRandomUUID();
    if (uuid.toString().length < 8) {
      uuid = createRandomUUID();
    }
    return uuid;
  }

  constructor() {
    super();
    this.state = {
      step: 1,
      sessionColor: '',
      sessionId: null,
      allFinishedItemsData: {},
      participantAge: null,
      participantGender: '',
      participantDevice: '',
      onlinePurchasingFrequency: null,
      send: false,
      participated: false,
    };
    this.handleChangeStep = this.handleChangeStep.bind(this);
    Experiment.uniqueId = Experiment.uniqueId.bind(this);
    Experiment.serialize = Experiment.serialize.bind(this);
  }

  componentDidUpdate(prevProps, prevState) {
    if (prevState.participated !== this.state.participated) {
      const cookies = new Cookies();
      cookies.set('participated', 'true', { path: '/' });
    }
  }

  handleChangeStep(args) {
    const { data, color, age, gender, device, frequency, send, participated } = args;
    this.setState({
      step: this.state.step + 1,
      allFinishedItemsData: data ? Experiment.serialize(data) : this.state.allFinishedItemsData,
      sessionColor: color || this.state.sessionColor,
      sessionId: this.state.sessionId || Experiment.uniqueId(),
      participantAge: age || this.state.participantAge,
      participantGender: gender || this.state.participantGender,
      participantDevice: device || this.state.participantDevice,
      onlinePurchasingFrequency: frequency || this.state.onlinePurchasingFrequency,
      send: send || this.state.send,
      participated: participated || this.state.participated,
    });
  }


  render() {
    const { step, send } = this.state;

    const Page = (currentStep) => {
      switch (currentStep) {
        case 2:
          return <ItemList handleChangeStep={this.handleChangeStep} />;
        case 3:
          return <Survey handleChangeStep={this.handleChangeStep} />;
        case 4:
          return <AuthenticityCheck handleChangeStep={this.handleChangeStep} />;
        case 5:
          if (send) {
            return <Statistics {...this.state} />;
          }
          return window.location.replace('/thankyou?sent=false');
        default:
          return <Instruction handleChangeStep={this.handleChangeStep} />;
      }
    };

    return (
      <div>
        <Header />
        <Grid>
          <Row>
            {Page(step)}
          </Row>
        </Grid>
      </div>
    );
  }
}

export default Experiment;
