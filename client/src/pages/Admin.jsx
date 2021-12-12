import React, { useState } from "react";
import { Switch, useRouteMatch, Route } from "react-router";
import { Container, Row, Col, Button } from "react-bootstrap";
import AdminBar from "../components/AdminBar";
import BrandCreate from "../components/modals/BrandCreate";
import DeviceCreate from "../components/modals/DeviceCreate";
import TypeCreate from "../components/modals/TypeCreate";
import UsersAdmin from "../components/UsersAdmin";

const Admin = () => {
    // const [brandVisible, setBrandVisible] = useState(false)
    // const [typeVisible, setTypeVisible] = useState(false)
    // const [deviceVisible, setDeviceVisible] = useState(false)

    let { path, url } = useRouteMatch();


    return (


        <Container>
            <Row className="mt-2">
                <Col md={3}>
                    <AdminBar />
                </Col>
                <Col md={9}>
                    admin feature
                    <Switch>
                        <Route exact path={path}>
                            <h3>Please select a topic.</h3>
                        </Route>
                        <Route path={`${path}/users`}>
                            <UsersAdmin />
                        </Route>
                    </Switch>
                </Col>
            </Row>
        </Container>



        // <Container className='d-flex flex-column'>
        //     <Button
        //         className='mt-2 p-2'
        //         onClick={() => setDeviceVisible(true)}
        //     >
        //         Create device
        //     </Button>
        //     <Button
        //         className='mt-2 p-2'
        //         onClick={() => setBrandVisible(true)}
        //     >
        //         Create brand
        //     </Button>
        //     <Button
        //         className='mt-2 p-2'
        //         onClick={() => setTypeVisible(true)}
        //     >
        //         Create type
        //     </Button>

        //     {/* MODALS */}
        //     <BrandCreate
        //         show={brandVisible}
        //         onHide={() => setBrandVisible(false)}
        //     />
        //     <DeviceCreate
        //         show={deviceVisible}
        //         onHide={() => setDeviceVisible(false)}
        //     />
        //     <TypeCreate
        //         show={typeVisible}
        //         onHide={() => setTypeVisible(false)}
        //     />
        // </Container>
    );
};

export default Admin;