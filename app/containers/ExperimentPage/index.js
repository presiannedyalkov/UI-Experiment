/**
 *
 * Experiment
 *
 */

// Libraries
import React from 'react';

// Components
import { Grid, Row } from 'react-bootstrap';
import Header from 'components/Header';
import Instruction from 'components/Instruction';
import ItemList from 'containers/ItemList';
import AuthenticityCheck from 'components/AuthenticityCheck';
import Survey from 'components/Survey';
import ThankYou from 'components/ThankYou';

// import Statistics from 'components/Statistics';

export class Experiment extends React.PureComponent {
  constructor() {
    super();
    this.state = {
      step: 1,
      sessionColor: '',
      allFinishedItemsData: [],
      participantAge: null,
      participantGender: '',
      participantDevice: '',
      onlinePurchasingFrequency: null,
      sendData: false,
    };
    this.handleChangeStep = this.handleChangeStep.bind(this);
  }

  componentDidUpdate() {
    if (this.state.sendData === true) {
    //  console.log(this.state);
    }
  }

  handleChangeStep(...props) {
    const args = props[0];
    console.log(props);
    const send = args.send ? args.send : this.state.sendData;
    const data = args.data ? args.data : this.state.allFinishedItemsData;
    const color = args.color ? args.color : this.state.sessionColor;
    const age = args.age ? args.age : this.state.participantAge;
    const gender = args.gender ? args.gender : this.state.participantGender;
    const device = args.device ? args.device : this.state.participantDevice;
    const items = args.items ? args.items : this.state.onlinePurchasingFrequency;
    this.setState({
      step: this.state.step + 1,
      sendData: send,
      allFinishedItemsData: data,
      sessionColor: color,
      participantAge: age,
      participantGender: gender,
      participantDevice: device,
      onlinePurchasingFrequency: items,
    },
    () => console.log(this.state)
    );
  }

  render() {
    const { step } = this.state;

    const Page = (currentStep) => {
      switch (currentStep) {
        case 2:
          return <ItemList handleChangeStep={this.handleChangeStep} />;
        case 3:
          return <Survey handleChangeStep={this.handleChangeStep} />;
        case 4:
          return <AuthenticityCheck handleChangeStep={this.handleChangeStep} />;
        case 5:
          return <ThankYou />;
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
