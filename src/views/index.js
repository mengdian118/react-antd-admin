// import from ''
import Loadable from 'react-loadable'
import {Loading} from '../components'
//懒加载
const Dashboard = Loadable({
    loader: () => import('./Dashboard'),
    loading: Loading
})
const Login = Loadable({
    loader: () => import('./Login'),
    loading: Loading
})
const Center = Loadable({
    loader: () => import('./Center'),
    loading: Loading
})
const NotFound = Loadable({
    loader: () => import('./NotFound'),
    loading: Loading
})
const Settings = Loadable({
    loader: () => import('./Settings'),
    loading: Loading
})
const ArticleList = Loadable({
    loader: () => import('./Article'),
    loading: Loading
})
const ArticleEdit = Loadable({
    loader: () => import('./Article/Edit'),
    loading: Loading
})
const ArticleCreate = Loadable({
    loader: () => import('./Article/ArticleCreate'),
    loading: Loading
})
const Notifications = Loadable({
    loader: () => import('./Notifications'),
    loading: Loading
})


export {
    Dashboard,
    Login,
    Center,
    NotFound,
    Settings,
    ArticleList,
    ArticleEdit,
    ArticleCreate,
    Notifications
}