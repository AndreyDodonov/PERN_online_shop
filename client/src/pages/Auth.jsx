import React, { useContext, useState } from "react";
import { Card, Container, Form, Button, Row } from "react-bootstrap";
import { NavLink, useLocation, useHistory } from "react-router-dom";
import { registration, login } from "../http/userAPI";
import { LOGIN_ROUTE, REG_ROUTE, SHOP_ROUTE } from "../utils/constants";
import { observer } from "mobx-react-lite";
import { Context } from "..";

const Auth = observer(() => {

    const { user } = useContext(Context);
    const location = useLocation();
    const history = useHistory();
    const isLogin = location.pathname === LOGIN_ROUTE;
    const [email, setEmail] = useState();
    const [password, setPassword] = useState();

    const signIn = async () => {
        try {
            let data;
            if (isLogin) {
                data = await login(email, password);
                // console.log("user " + data.email + " is login" + " : " + data);
            } else {
                data = await registration(email, password);
                console.log(data);
            }

            user.setUser(user);
            user.setIsAuth(true);
            history.push(SHOP_ROUTE);
        } catch (e) { }

    }


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
                        value={email}
                        onChange={e => setEmail(e.target.value)}
                    />
                    <Form.Control
                        className="mt-2"
                        placeholder="Enter password"
                        type="password"
                        value={password}
                        onChange={e => setPassword(e.target.value)}
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
                            onClick={signIn}
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
});

export default Auth;