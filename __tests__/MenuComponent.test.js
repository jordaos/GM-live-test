import React from 'react';
import { shallow } from 'enzyme';
import { expect as chaiExpect } from 'chai';
import * as objects from './objects'

import MenuComponent from './../src/view/components/MenuComponent'

describe('Testing MenuComponent', () => {
    it('Render Component', () => {
        const wrapper = shallow(<MenuComponent user={objects.user} menuList={objects.menuList}/>);
        expect(wrapper).toMatchSnapshot();
    });

    it('Show two items in menu', () => {
        const wrapper = shallow(<MenuComponent user={objects.user} menuList={objects.menuList}/>);
        chaiExpect(wrapper.find('div.col-sm-3.col-md-2.sidebar > ul > li > a')).to.have.lengthOf(2);
    });

    it('Show correct user informations', () => {
        const wrapper = shallow(<MenuComponent user={objects.user} menuList={objects.menuList}/>);
        chaiExpect(wrapper.find(".media-heading").text()).to.equal("Jordão");
    })
});