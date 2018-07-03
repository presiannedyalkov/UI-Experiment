/**
 *
 * Experiment
 *
 */

// Libraries
import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { compose } from 'redux';

// Components
import ItemList from 'containers/ItemList';
import Header from 'components/Header';

//
import injectReducer from 'utils/injectReducer';
import makeSelectExperiment from './selectors';
import reducer from './reducer';

export class Experiment extends React.PureComponent { // eslint-disable-line react/prefer-stateless-function
  render() {
    return (
      <div>
        <Header />
        <ItemList />
      </div>
    );
  }
}

Experiment.propTypes = {
  dispatch: PropTypes.func.isRequired,
};

const mapStateToProps = createStructuredSelector({
  experiment: makeSelectExperiment(),
});

function mapDispatchToProps(dispatch) {
  return {
    dispatch,
  };
}

const withConnect = connect(mapStateToProps, mapDispatchToProps);

const withReducer = injectReducer({ key: 'experiment', reducer });

export default compose(
  withReducer,
  withConnect,
)(Experiment);
