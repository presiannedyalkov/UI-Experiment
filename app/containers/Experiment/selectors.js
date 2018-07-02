import { createSelector } from 'reselect';

/**
 * Direct selector to the experiment state domain
 */
const selectExperimentDomain = (state) => state.get('experiment');

/**
 * Other specific selectors
 */


/**
 * Default selector used by Experiment
 */

const makeSelectExperiment = () => createSelector(
  selectExperimentDomain,
  (substate) => substate.toJS()
);

export default makeSelectExperiment;
export {
  selectExperimentDomain,
};
