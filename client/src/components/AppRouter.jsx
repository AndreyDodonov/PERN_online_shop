import { observer } from "mobx-react-lite";
import React, { useContext } from "react";
import { Route ,Switch, Redirect} from 'react-router-dom'
import { Context } from "..";
import {authRoutes, publicRoutes} from "../routes";
import { SHOP_ROUTE } from "../utils/constants";

// * work only with react-router-dom 5.2.0

const AppRouter = observer(() => {    

    const {user} = useContext(Context)   

    return (          
        <Switch>
            {user._isAuth && authRoutes.map(({path, Component}) => 
                <Route key = {path} path={path} component = {Component} exact/>
            )}
            {publicRoutes.map(({path, Component}) => 
                <Route key = {path} path={path} component = {Component} exact/>
            )}
            <Redirect to = {SHOP_ROUTE}/>
        </Switch>
    );
});

export default AppRouter;