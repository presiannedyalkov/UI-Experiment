import React from 'react';
import { FormattedMessage } from 'react-intl';
import { shallow } from 'enzyme';

import Survey from '../index';
import messages from '../messages';

describe('<Survey />', () => {
  it('should render the page message', () => {
    const renderedComponent = shallow(
      <Survey />
    );
    expect(renderedComponent.contains(
      <FormattedMessage {...messages.header} />
    )).toEqual(true);
  });
});
