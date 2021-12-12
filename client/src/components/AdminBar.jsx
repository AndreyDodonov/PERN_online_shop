import React from "react";
import { Row, Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import { useRouteMatch } from "react-router";

const AdminBar = () => {

    let { path, url } = useRouteMatch();

    return (
        <Row className="d-flex">
            <h3>Admin</h3>
            <Button>
                Items
            </Button>
            <Link to="/users">
                <Button className="mt-2">
                    Users
                </Button>
            </Link>
            <Button className="mt-2">
                Statistic
            </Button>
            <Button className="mt-2">
                Settings
            </Button>
        </Row>
    )
}

export default AdminBar;


