import React, { Component } from 'react'
import {Frame} from './components'
import { Route, Switch, Redirect } from 'react-router-dom'
import { adminRoutes } from './routers'
export default class App extends Component {

    render() {
        // console.log(this.props)
        return (
            <Frame>
                 <Switch>
                    {
                        adminRoutes.map(route => {
                            return <Route
                                key={route.pathname}
                                path={route.pathname}
                                exact={route.exact}
                                render={
                                    (routerProps) => {
                                        return <route.component {...routerProps} />
                                    }
                                } />
                        })
                    }
                    <Redirect to={adminRoutes[0].pathname} from="/admin" exact />
                    <Redirect to="/404" />
                </Switch>
            </Frame>
        )
    }
}
