import React, { Component } from 'react'
import {Frame} from './components'
import { Route, Switch, Redirect } from 'react-router-dom'
import { adminRoutes } from './routers'
import { connect } from 'react-redux'

const mapState = state =>{
    return {
        isLogin: state.user.isLogin,
        role:  state.user.role
    }
}

@connect(mapState)

 class App extends Component {
    render() {
        return (
            this.props.isLogin 
            ?
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
                                        const hasPermission = route.roles.includes(this.props.role || JSON.parse(window.localStorage.getItem('userInfo')).userInfo.role || JSON.parse(window.localStorage.getItem('userInfo')).userInfo.role)
                                        return hasPermission ? <route.component {...routerProps} /> : <Redirect to="/admin/noauth" />
                                        // return  <route.component {...routerProps} /> 
                                    }
                                } />
                        })
                    }
                    <Redirect to={adminRoutes[0].pathname} from="/admin" exact />
                    <Redirect to="/404" />
                </Switch>
            </Frame>
            :
            <Redirect to="/login" />
        )
    }
}
export default App