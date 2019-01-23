import React, { Component } from 'react';
import NavbarComponent from '../../components/NavbarComponent';
import MenuComponent from '../../components/MenuComponent';

import AppList from '../../components/AppList';

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
                    <div className="row app-content">
                        <MenuComponent 
                            menuList={this.state.menuList}/>
                        
                        <div className="col-sm-9 col-sm-offset-3 col-md-10 col-md-offset-2 main">
                            <h1>Repositórios com estrelas</h1>
                            <AppList />
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default HomePage;