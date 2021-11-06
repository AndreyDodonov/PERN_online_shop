import React from "react";
import { Route ,Switch, Redirect} from 'react-router-dom'
import {authRoutes, publicRoutes} from "../routes";

const AppRouter = () => {
    // моковая заглушка для проверки авторизации 
    const isAuth = false
    return (          
        <Switch>
            {isAuth && authRoutes.map(({path, Component}) => 
                <Route key = {path} path={path} component = {Component} exact/>
            )}
            {publicRoutes.map(({path, Component}) => 
                <Route key = {path} path={path} component = {Component} exact/>
            )}
        </Switch>
    );
};

export default AppRouter;