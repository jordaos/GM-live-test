import React from 'react';
import { ListGroup, ListGroupItem } from "react-bootstrap";

const AppList = (data) => {
    if (data.length !== undefined) {
        return (
            <ListGroup>
                {data.map((item, index) => {
                    return (
                        <ListGroupItem header="Heading 2" href="#">
                            Linked item
                    </ListGroupItem>
                    )
                })}

            </ListGroup>
        )
    } 
    return null;
};

export default AppList;