import React, { useState } from "react";
import { Container, Button } from "react-bootstrap";
import BrandCreate from "../components/modals/BrandCreate";
import DeviceCreate from "../components/modals/DeviceCreate";
import TypeCreate from "../components/modals/TypeCreate";

const Admin = () => {
    const [brandVisible, setBrandVisible] = useState(false)
    const [typeVisible, setTypeVisible] = useState(false)
    const [deviceVisible, setDeviceVisible] = useState(false)
    return (
        <Container className='d-flex flex-column'>
            <Button
                className='mt-2 p-2'
                onClick={() => setDeviceVisible(true)}
            >
                Create device
            </Button>
            <Button
                className='mt-2 p-2'
                onClick={() => setBrandVisible(true)}
            >
                Create brand
            </Button>
            <Button
                className='mt-2 p-2'
                onClick={() => setTypeVisible(true)}
            >
                Create type
            </Button>

            {/* MODALS */}
            <BrandCreate
                show={brandVisible}
                onHide={() => setBrandVisible(false)}
            />
            <DeviceCreate
                show={deviceVisible}
                onHide={() => setDeviceVisible(false)}
            />
            <TypeCreate
                show={typeVisible}
                onHide={() => setTypeVisible(false)}
            />
        </Container>
    );
};

export default Admin;