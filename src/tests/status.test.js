import React from 'react';
import { shallow } from 'enzyme';
import Status from '../components/status';

import { configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

configure({ adapter: new Adapter() });

it('renders without crashing', () => {
    shallow(<Status />);
});