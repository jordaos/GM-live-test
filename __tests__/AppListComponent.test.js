import React from 'react';
import { shallow } from 'enzyme';
import AppListComponent from './../src/view/components/AppListComponent'
import { ListGroupItem } from "react-bootstrap";
import { expect as chaiExpect } from 'chai';
import * as objects from './objects'

describe('Testing AppListComponent', () => {
    it('Render Component', () => {
        const wrapper = shallow(<AppListComponent data={{}}/>);
        expect(wrapper).toMatchSnapshot();
    });

    it('Show tree <ListGroupItem />', () => {
        const wrapper = shallow(<AppListComponent data={objects.repositoriesList}/>);
    
        chaiExpect(wrapper.find(ListGroupItem)).to.have.lengthOf(2);
    });
})