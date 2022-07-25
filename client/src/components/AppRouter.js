import React, { useContext } from 'react';
import {Routes, Route, Navigate} from 'react-router-dom'
import {authRoutes, publicRoutes} from "../routes";
import {Context} from '../index'


const AppRouter = () => {
    const {user} = useContext(Context)

    console.log(user);

    return (
            <Routes>
                {user.isAuth && authRoutes.map(({path, Component}) =>
                    <Route key={path} path={path} element={<Component/>} exact/>
                )}
                {publicRoutes.map(({path, Component}) =>
                    <Route key={path} path={path} element={<Component/>} exact/>
                )}
                <Route path="*" element={<Navigate to="/" />}/>
            </Routes>
    )
}

export default AppRouter