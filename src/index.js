import React from 'react';
import { render } from 'react-dom';
import App from './App'
import { HashRouter as Router, Route, Switch, Redirect } from 'react-router-dom'
import zhCN from 'antd/es/locale/zh_CN';
import { ConfigProvider } from 'antd'
import { mainRoutes } from './routers'
import {Provider} from 'react-redux'
import store from './store'
import './style/admin/index/index.less'

render(
   <Provider store={store}>
         <ConfigProvider locale={zhCN}>
            <Router>
               <Switch>
                  <Route path="/admin" component={App} />

                  {
                     mainRoutes.map(route => {
                        return <Route key={route.pathname} path={route.pathname} component={route.component} />
                     })
                  }
                  <Redirect to="/admin" from="/" exact />
                  <Redirect to="/404" />

               </Switch>
            </Router>
         </ConfigProvider>
    </Provider>,
   document.querySelector('#root')

)

