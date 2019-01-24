import React from 'react';
import { shallow } from 'enzyme';
import AppListComponent from './../src/view/components/AppListComponent'
import { ListGroupItem } from "react-bootstrap";
import { expect as chaiExpect } from 'chai';

describe('Testing AppListComponent', () => {
    it('Render Component', () => {
        const wrapper = shallow(<AppListComponent data={{}}/>);
        expect(wrapper).toMatchSnapshot();
    });

    it('Show tree <ListGroupItem />', () => {
        const data = [
            {
                name: "Repository 1",
                html_url: "https://github.com/jordaos/blog-admin",
                stargazers_count: 5,
                owner: {
                    login: "jordaos"
                }
            },
            {
                name: "Repository 2",
                html_url: "https://github.com/jordaos/GM-live-test",
                stargazers_count: 7,
                owner: {
                    login: "jordaos"
                }
            }
        ]
        const wrapper = shallow(<AppListComponent data={data}/>);
    
        chaiExpect(wrapper.find(ListGroupItem)).to.have.lengthOf(2);
    });
})