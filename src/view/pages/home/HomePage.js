import React, { Component } from 'react';
import axios from 'axios'

import NavbarComponent from '../../components/NavbarComponent';
import MenuComponent from '../../components/MenuComponent';
import AppList from '../../components/AppList';
import { USER_STORED } from '../../../constants';

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
            ],
            user: JSON.parse(localStorage.getItem(USER_STORED)),
            repositoriesList: null
        }
    }
    
    componentDidMount() {
        //this.fetchStarredRepositories();
    }

    fetchStarredRepositories() {
        axios.get(`https://api.github.com/users/${this.state.user.login}/starred`)
            .then(result => {
                this.setState({repositoriesList: result.data});
            }).catch(error => {
                console.log(error);
            });
    }

    render() {
        return (
            <div>
                <NavbarComponent />
                <div className="container-fluid">
                    <div className="row app-content">
                        <MenuComponent
                            user={this.state.user}
                            menuList={this.state.menuList}/>
                        
                        <div className="col-sm-9 col-sm-offset-3 col-md-10 col-md-offset-2 main">
                            <h1>Repositórios com estrelas</h1>
                            <AppList 
                                data={this.state.repositoriesList}/>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default HomePage;