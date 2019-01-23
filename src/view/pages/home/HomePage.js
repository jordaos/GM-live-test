import React, { Component } from 'react';
import NavbarComponent from '../../components/NavbarComponent';
import MenuComponent from '../../components/MenuComponent';

import './HomePage.css';

class HomePage extends Component {
    constructor(props) {
        super(props);

        this.state = {
            menuList: [
                {
                    title: "Home",
                    href: "/home",
                    active: true
                },
                {
                    title: "About",
                    href: "/about",
                    active: false
                }
            ]
        }
    }

    render() {
        return (
            <div>
                <NavbarComponent />
                <div className="container-fluid">
                    <div className="row">
                        <MenuComponent 
                            menuList={this.state.menuList}/>
                    </div>
                </div>
            </div>
        )
    }
}

export default HomePage;