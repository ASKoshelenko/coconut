import React, { useContext } from 'react';
import { Context } from '../index';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import {Button, Container} from 'react-bootstrap';
import { NavLink } from 'react-router-dom';
import { ADMIN_ROUTE, LOGIN_ROUTE, SHOP_ROUTE } from '../utils/consts';
import { observer } from 'mobx-react-lite';
import { useNavigate } from 'react-router-dom';



const NavBar = observer(() => {
    const {user} = useContext(Context)
    const navigate = useNavigate();
    return (
        <>
          <Navbar bg="dark" variant="dark">
            <Container>
              <NavLink style={{color: 'white'}} to={SHOP_ROUTE}>Coconut</NavLink>
              { user.isAuth ?
                <Nav className="ms-auto" style={{color: 'white'}}>
                  <Button variant={'outline-light'} onClick={() => navigate(ADMIN_ROUTE)}>Админ панель</Button>
                  <Button variant={'outline-light'} className='ms-2' onClick={() => navigate(LOGIN_ROUTE)}>Выйти</Button>
                </Nav>
                :
                <Nav className="ms-auto" style={{color: 'white'}}>
                  <Button variant={'outline-light'} onClick={() => user.setIsAuth(true)}>Авторизация</Button>
                </Nav>
              }
            </Container>
          </Navbar>
      </>
    )
})

export default NavBar;