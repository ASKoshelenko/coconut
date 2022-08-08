import React, {useContext} from 'react';
import {Context} from "../index";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import {NavLink} from "react-router-dom";
import {ADMIN_ROUTE, BASKET_ROUTE, LOGIN_ROUTE, SHOP_ROUTE} from "../utils/consts";
import {Button, Image} from "react-bootstrap";
import {observer} from "mobx-react-lite";
import Container from "react-bootstrap/Container";
import {useHistory} from 'react-router-dom'
//import jwt_decode from 'jwt-decode'
import coco from '../img/coco.png'

const NavBar = observer(() => {
    const {user} = useContext(Context)
    const history = useHistory()

    const logOut = () => {
        user.setUser({})
        user.setIsAuth(false)
        user.setIsAdmin(false)
    }

    return (
        <Navbar className="navbar">
            <Container>
                <NavLink className="d-flex row align-items-center ml-4"  style={{color:'white'}} to={SHOP_ROUTE}
                ><b>Coconut</b>
                <Image width={35} height={25} src={coco}></Image>
                </NavLink>
                {user.isAuth ?
                    <Nav className="ml-auto" style={{color: 'white'}}>
                        <Button
                            variant={"outline-light"}
                            className="mr-2"
                            onClick={() => history.push(BASKET_ROUTE)}
                        >
                            Basket
                        </Button>
                        {user.isAdmin ?
                            <Button
                                variant={"outline-light"}
                                onClick={() => history.push(ADMIN_ROUTE)}
                            >
                                Admin
                            </Button>
                            :
                            <div></div>
                        }
                        <Button
                            variant={"outline-light"}
                            onClick={() => logOut(localStorage.removeItem('token'))}
                            className="ml-2"
                        >
                            Logout
                        </Button>
                    </Nav>
                    :
                    <Nav className="ml-auto" style={{color: 'white'}}>
                        <Button variant={"outline-light"} onClick={() => history.push(LOGIN_ROUTE)}>Авторизация</Button>
                    </Nav>
                }
            </Container>
        </Navbar>

    );
});

export default NavBar;
