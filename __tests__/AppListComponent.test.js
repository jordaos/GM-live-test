import React from 'react';
import { shallow } from 'enzyme';
import AppListComponent from './../src/view/components/AppListComponent'

describe('Testing AppListComponent', () => {
    it('Show tree <ListGroupItem />', () => {
        const wrapper = shallow(<AppListComponent data={{}}/>);

        expect(wrapper).toMatchSnapshot();
    })
})