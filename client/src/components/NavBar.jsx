import React, { useContext } from "react";
import { Context } from "..";
import { Navbar } from 'react-bootstrap';
import { Nav } from 'react-bootstrap';
import { Container } from "react-bootstrap";
import { Button } from 'react-bootstrap';
import { ADMIN_ROUTE, LOGIN_ROUTE, SHOP_ROUTE } from "../utils/constants";
import { observer } from 'mobx-react-lite';
import { useHistory } from "react-router";

const NavBar = observer(() => {

    const { user } = useContext(Context)
    const history = useHistory();
    console.log(user._isAuth); 


    return (
        <Navbar bg="dark" variant="dark">
            <Container>
                <Navbar.Brand href={SHOP_ROUTE}>TestShop</Navbar.Brand>

                {user._isAuth ?
                    <Nav className="ml-auto">
                        <Button
                            onClick={() => history.push(ADMIN_ROUTE)}
                        >Admin Panel</Button>
                        <Button
                            className="mx-2"
                            onClick={() => history.push(LOGIN_ROUTE)}
                        >Logout
                        </Button>
                    </Nav>
                    :
                    <Nav className="ml-auto">
                        <Nav.Link href={SHOP_ROUTE}>Home</Nav.Link>
                        <Nav.Link href="#payInfo">Pay</Nav.Link>
                        <Nav.Link href="#deliverInfo">Deliver</Nav.Link>
                        <Nav.Link href="#contacts">Contacts</Nav.Link>
                        <Button
                            onClick={() => user.setIsAuth(true)}
                        >Authorization</Button>
                    </Nav>
                }

            </Container>
        </Navbar>
    )
})

export default NavBar