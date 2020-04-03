import React, { Component } from 'react'
import { Layout, Menu, Dropdown,Avatar,Badge, Tooltip } from 'antd';
import { 
    DashboardOutlined, UnorderedListOutlined,QuestionCircleOutlined,
    SettingOutlined,DownOutlined, UserOutlined,LogoutOutlined
 }
from '@ant-design/icons';
import { adminRoutes } from '../../routers'
import { Link,withRouter } from 'react-router-dom'
import logo from './logo.png'
import './frame.less'
const { Header, Content, Sider } = Layout;
const menus = adminRoutes.filter(route => route.isNav === true)

@withRouter
class Frame extends Component {
    
    constructor(props){
        super(props)
        this.state = {
                    defaultAvatar: false,
                    count: 5,
                    show: true
        }
    }
    onClick= ({key})=>{
            this.props.history.push(key)
    }
    myMenu = () => (
        <Menu onClick={this.onClick}>
          <Menu.Item key="/admin/notice"><Badge dot offset={[5,3]}><UserOutlined />通知中心</Badge></Menu.Item>
          <Menu.Item key="/admin/settings"><SettingOutlined />个人设置</Menu.Item>
          <Menu.Item key="/login"><LogoutOutlined />退出登录</Menu.Item>
        </Menu>
    )
    menuIcon = (icon) => {
        switch (icon) {
            case 'DashboardOutlined':
                return <DashboardOutlined />
            case 'UnorderedListOutlined':
                return <UnorderedListOutlined />
            case 'SettingOutlined':
                return <SettingOutlined />
            case 'UserOutlined':
            return <UserOutlined />
            default:
                break;
        }
    }
    onMenuClick = ({key}) => {
           this.props.history.push(key)
    }
    render() {
        const selectedKeyAyy = this.props.location.pathname.split('/')
        selectedKeyAyy.length = 3
        return (
            <Layout style={{minHeight:"100%"}}>
                <Header className="header ra-header">
                    <div className="ra-logo">
                        <Link to="/admin">
                            <img src={logo} alt="react-admin" />
                        </Link>
                    </div>
                    <div>
                            <Tooltip title="项目地址">
                                <a target="_blank" rel="noopener noreferrer" href="https://github.com/mengdian118/react-antd-admin.git" className="helpBtn"><QuestionCircleOutlined /></a>
                            </Tooltip>
                    </div>
                    {/* <div>
                            <span className="bellMess"><Badge offset={[-10,11]} count={this.state.count}><BellOutlined /></Badge></span>
                              
                    </div> */}
                    <div className="personalCenter">
                        <Dropdown overlay={this.myMenu()}>
                                <div className="ant-dropdown-link" onClick={e => e.preventDefault()}>
                                    <Badge count={this.state.count} offset={[10,3]}>
                                        {/* <Avatar icon={<UserOutlined />} style={{display:this.state.defaultAvatar? '':'none'}}/> */}
                                        <Avatar style={{display:!this.state.defaultAvatar? '':'none'}} src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png" />
                                        <span style={{display:this.state.defaultAvatar? '':'none'}}>&nbsp;请先登录&nbsp;</span>
                                        <span style={{display:!this.state.defaultAvatar? '':'none'}}>&nbsp;欢迎您！nnss&nbsp;</span>
                                        <DownOutlined />
                                    </Badge>
                                </div>
                        </Dropdown>
                    </div>
                </Header>
                <Layout>
                    <Sider width={200} className="site-layout-background">
                        <Menu
                            mode="inline"
                            // defaultSelectedKeys={[this.props.location.pathname]}
                            selectedKeys={[selectedKeyAyy.join('/')]}
                            onClick={this.onMenuClick}
                            style={{ height: '100%', borderRight: 0 }}
                            theme="dark"
                        >
                            
                            {
                                menus.map(item => {
                                    return (
                                        <Menu.Item key={item.pathname}>
                                            <span>
                                                {this.menuIcon(item.icon)}
                                            </span>
                                            {item.title}
                                        </Menu.Item>
                                    )
                                })
                            }
                        </Menu>
                    </Sider>
                    <Layout style={{ padding: '16px' }}>
                    {/* <Breadcrumb style={{ margin: '16px 0' }}>{this.state.extraBreadcrumbItems}</Breadcrumb>; */}
                        {/* <Breadcrumb style={{ margin: '16px 0' }}>
                            <Breadcrumb.Item>12</Breadcrumb.Item>
                            
                        </Breadcrumb> */}
                        <Content
                            className="site-layout-background"
                            style={{
                                margin: 0,
                                minHeight: 280,
                            }}
                        >
                            {this.props.children}
                        </Content>
                    </Layout>
                </Layout>
            </Layout>
        )
    }
}
export default Frame