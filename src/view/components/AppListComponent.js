import React from 'react';
import { ListGroup, ListGroupItem } from "react-bootstrap";

const AppListComponent = (data) => {
    if (data.data.length !== undefined) {
        return (
            <ListGroup>
                {data.data.map((item, index) => {
                    return (
                        <ListGroupItem header={item.name} href={item.html_url} key={index}>
                            @{item.owner.login} | {item.stargazers_count} <i className="fa fa-star"></i>
                        </ListGroupItem>
                    )
                })}

            </ListGroup>
        )
    } 
    return null;
};

export default AppListComponent;