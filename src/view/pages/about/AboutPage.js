import React, { Component } from 'react';
import GoogleMapReact from 'google-map-react';
import { Panel, Table } from "react-bootstrap";

import NavbarComponent from '../../components/NavbarComponent';
import MenuComponent from '../../components/MenuComponent';


class AboutPage extends Component {
    constructor(props) {
        super(props);

        this.state = {
            center: {
                lat: 59.95,
                lng: 30.33
            },
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
            ]
        }
    }

    renderMarkers(map, maps) {
        let marker = new maps.Marker({
            position: this.state.center,
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
                            menuList={this.state.menuList} />

                        <div className="col-sm-9 col-sm-offset-3 col-md-10 col-md-offset-2 main">
                            <h1>Informações do usuário</h1>

                            <br />

                            <h4><b>Apelido:</b> jordaos</h4>
                            <h4><b>E-mail:</b> jordao05@hotmail.com</h4>
                            <h4><b>URL:</b> htps://github.com/jordaos</h4>

                            <Panel>
                                <Panel.Heading>
                                    <Panel.Title componentClass="h3">Biografia</Panel.Title>
                                </Panel.Heading>
                                <Panel.Body>Panel content</Panel.Body>
                            </Panel>

                            <div style={{ height: '70vh', width: '100%' }}>
                                <GoogleMapReact
                                    bootstrapURLKeys={{ key: "AIzaSyCYI7KqYTpqkc5GX0LCKBaOLU5q6K4Bxj0" }}
                                    defaultCenter={this.state.center}
                                    defaultZoom={this.state.zoom}
                                    onGoogleApiLoaded={({ map, maps }) => this.renderMarkers(map, maps)}
                                ></GoogleMapReact>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default AboutPage;