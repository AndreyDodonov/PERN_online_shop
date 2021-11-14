import React from "react";
import { Container, Button } from "react-bootstrap";

const Admin = () => {
    return (
        <Container>
            <Button>
                Create device
            </Button>
            <Button>
                Create brand
            </Button>
            <Button>    
                Create type
            </Button>
        </Container>
    );
};

export default Admin;