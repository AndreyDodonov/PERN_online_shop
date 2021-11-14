import React from "react";
import { Card, Container, Form, Button, Row } from "react-bootstrap";
import { NavLink, useLocation } from "react-router-dom";
import { LOGIN_ROUTE, REG_ROUTE } from "../utils/constants";

const Auth = () => {

    const location = useLocation();
    const isLogin = location.pathname === LOGIN_ROUTE
   

    return (
        <Container
            className="
            d-flex
            justify-content-center
            align-items-center
            "
            style={{ height: window.innerHeight - 54 }}
        >

            <Card
                style={{ width: 600 }}
                className="p-5"
            >
                <h2
                    className="m-auto"
                >
                    {isLogin ? 'Authorization' : 'Registartion'} 
                </h2>
                <Form
                    className="d-flex flex-column"
                >
                    <Form.Control
                        className="mt-2"
                        placeholder="Enter e-mail"
                    />
                    <Form.Control
                        className="mt-2"
                        placeholder="Enter password"
                    />
                    <Row
                        className="d-flex justify-content-between pl-3 pr-3"
                    >
                        {isLogin ? 
                        <div>
                        don't have an account? <NavLink to={REG_ROUTE}>Registration</NavLink>
                        </div>
                        :
                        <div>
                        Do you have an account? <NavLink to={LOGIN_ROUTE}>Login</NavLink>
                        </div>
                    }
                        
                        <Button
                            variant={"outline-primary"}                            
                            className="mt-2 "
                        >
                            {
                                isLogin ?
                                'Enter'
                                :
                                'Registration'
                            }
                        </Button>
                    </Row>

                </Form>
            </Card>
        </Container>
    );
};

export default Auth;