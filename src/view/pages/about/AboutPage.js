import React, { Component } from 'react';
import GoogleMapReact from 'google-map-react';
import { connect } from 'react-redux';
import { Panel } from "react-bootstrap";

import { latLngChange } from '../../../store/actions/appActions'

import NavbarComponent from '../../components/NavbarComponent';
import MenuComponent from '../../components/MenuComponent';
import { USER_STORED } from '../../../constants';
import axios from 'axios';


class AboutPage extends Component {
    constructor(props) {
        super(props);

        if(!localStorage.getItem(USER_STORED))
            this.props.history.push('/');

        this.state = {
            zoom: 11,
            menuList: [
                {
                    title: "Home",
                    href: "/home",
                    active: false
                },
                {
                    title: "About",
                    href: "/about",
                    active: true
                }
            ],
            user: JSON.parse(localStorage.getItem(USER_STORED))
        }
        this.getLatLng();
    }

    getLatLng() {
        axios.get('https://maps.googleapis.com/maps/api/geocode/json?address=' + this.state.user.location + '&key=AIzaSyDFju5SP3070LLp5WbDEC6SZfFhz__h83c')
            .then(response => {
                const { lat, lng } = response.data.results[0].geometry.location;
                this.props.latLngChange({lat, lng});
            })
    }

    renderMarkers(map, maps) {
        new maps.Marker({
            position: this.props.latLng,
            map,
            title: 'Hello World!'
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
                            menuList={this.state.menuList} />

                        <div className="col-sm-9 col-sm-offset-3 col-md-10 col-md-offset-2 main">
                            <h1>Informações do usuário</h1>

                            <br />

                            <h4><b>Apelido:</b> {this.state.user.login}</h4>
                            {this.state.user.email && <h4><b>E-mail:</b> {this.state.user.email}</h4>}
                            <h4><b>URL:</b> {this.state.user.html_url}</h4>

                            <Panel>
                                <Panel.Heading>
                                    <Panel.Title componentClass="h3">Biografia</Panel.Title>
                                </Panel.Heading>
                                <Panel.Body>{this.state.user.bio}</Panel.Body>
                            </Panel>

                            <div style={{ height: '70vh', width: '100%' }}>
                            {this.props.latLng.lat && this.props.latLng.lng &&
                                <GoogleMapReact
                                    bootstrapURLKeys={{ key: "AIzaSyCYI7KqYTpqkc5GX0LCKBaOLU5q6K4Bxj0" }}
                                    defaultCenter={this.props.latLng}
                                    defaultZoom={this.state.zoom}
                                    onGoogleApiLoaded={({ map, maps }) => this.renderMarkers(map, maps)}
                                ></GoogleMapReact>
                            }
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

const mapStateToProps = state => ({
    latLng: state.mapReducer.latLng
});

const mapDispatchToProps = {
    latLngChange
};

export default connect(mapStateToProps, mapDispatchToProps)(AboutPage);