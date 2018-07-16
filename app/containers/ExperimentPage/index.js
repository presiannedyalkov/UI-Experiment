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
    };
    this.handleChangeStep = this.handleChangeStep.bind(this);
  }

  handleChangeStep() {
    this.setState({
      step: this.state.step + 1,
    });
  }
  render() {
    const { step } = this.state;

    const Page = (currentStep) => {
      switch (currentStep) {
        case 2:
          return <ItemList handleChangeStep={this.handleChangeStep} />;
        case 3:
          return <AuthenticityCheck handleChangeStep={this.handleChangeStep} />;
        case 4:
          return <Survey handleChangeStep={this.handleChangeStep} />;
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
