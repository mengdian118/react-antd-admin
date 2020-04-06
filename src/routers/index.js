import {
    Dashboard,
    Login,
    NotFound,
    Settings,
    ArticleList,
    ArticleEdit,
    ArticleCreate,
    Center,
    Notifications,
    NoAuth
} from '../views'

export const mainRoutes = [
    {
        pathname: '/login',
        component: Login
    },
    {
        pathname: '/404',
        component: NotFound
    }
]

export const adminRoutes = [
    {
        pathname: '/admin/dashboard',
        component: Dashboard,
        title: '仪表盘',
        icon: 'DashboardOutlined',
        breadcrumbName: '首页',
        isNav: true,
        roles: ['001','002','003']
    },
    {
        pathname: '/admin/center',
        component: Center,
        title: '个人中心',
        icon: 'UserOutlined',
        breadcrumbName: '个人中心',
        // isNav: true,
        exact: true
    },
    {
        pathname: '/admin/notice',
        component: Notifications,
        title: '通知中心',
        // icon: 'UserOutlined',
        // breadcrumbName: '通知中心',
        // isNav: true,
        exact: true,
        roles: ['001','002','003']
    },
    ,
    {
        pathname: '/admin/noauth',
        component: NoAuth,
        roles: ['001','002','003'],
        // icon: 'UserOutlined',
        // breadcrumbName: '通知中心',
        // isNav: true,
        exact: true
    },
    {
        pathname: '/admin/article',
        component: ArticleList,
        title: '文章管理',
        icon: 'UnorderedListOutlined',
        breadcrumbName: '文章管理',
        isNav: true,
        exact: true,
        roles: ['001','002','003']
    },
    {
        pathname: '/admin/article/create/',
        breadcrumbName: '新建文章',
        component: ArticleCreate,
        roles: ['001','002','003']
    }, 
    {
        pathname: '/admin/article/edit/:id',
        breadcrumbName: '文章编辑',
        component: ArticleEdit,
        roles: ['001','002','003']
    }, 
    {
        pathname: '/admin/settings',
        component: Settings,
        icon: 'SettingOutlined',
        breadcrumbName: '设置',
        title: '设置',
        isNav: true,
        roles: ['001','002','003']
    }
]
