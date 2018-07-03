
import { fromJS } from 'immutable';
import experimentReducer from '../reducer';

describe('experimentReducer', () => {
  it('returns the initial state', () => {
    expect(experimentReducer(undefined, {})).toEqual(fromJS({}));
  });
});
