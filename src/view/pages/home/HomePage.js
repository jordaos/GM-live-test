import React, { Component } from 'react';
import { connect } from 'react-redux';
import axios from 'axios';

import { Alert } from "react-bootstrap";
import { repositoriesListChange } from '../../../store/actions/appActions'

import NavbarComponent from '../../components/NavbarComponent';
import MenuComponent from '../../components/MenuComponent';
import AppListComponent from '../../components/AppListComponent';
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
            isLoading: true
        }
    }

    componentDidMount() {
        this.fetchStarredRepositories();
    }

    fetchStarredRepositories() {
        axios.get(`https://api.github.com/users/${this.state.user.login}/starred`)
            .then(result => {
                this.props.repositoriesListChange(result.data);
                this.setState({isLoading: false});
            }).catch(error => {
                console.log(error);
            });
    }

    renderListOrMessage = () => {
        if (this.state.isLoading) {
            return (
                <Alert bsStyle="info">
                    <i className="fa fa-circle-o-notch fa-spin"></i>
                    <strong> Carregado...</strong>
                </Alert>
            );
        } else if (this.props.repositories.length > 0) {
            return (
                <AppListComponent
                    data={this.props.repositories} />
            );
        } else {
            return (
                <Alert bsStyle="warning">
                    <i className="fa fa-warning"></i>
                    <strong> Nenhum repositório encontrado</strong>
                </Alert>
            );
        }
    }

    render() {
        return (
            <div>
                <NavbarComponent />
                <div className="container-fluid">
                    <div className="row app-content">
                        <MenuComponent
                            user={this.state.user}
                            menuList={this.state.menuList} />

                        <div className="col-sm-9 col-sm-offset-3 col-md-10 col-md-offset-2 main">
                            <h1>Repositórios com estrelas</h1>
                            {this.renderListOrMessage()}
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

const mapStateToProps = state => ({
    repositories: state.repositoriesReducer.repositories
});

const mapDispatchToProps = {
    repositoriesListChange
};

export default connect(mapStateToProps, mapDispatchToProps)(HomePage);