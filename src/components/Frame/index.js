import React, { Component } from 'react'
import { Layout, Menu } from 'antd';
import { DashboardOutlined, UnorderedListOutlined, SettingOutlined } from '@ant-design/icons';
import { adminRoutes } from '../../routers'
import { Link,withRouter } from 'react-router-dom'
import logo from './logo.png'
import './frame.less'
const { Header, Content, Sider } = Layout;
const menus = adminRoutes.filter(route => route.isNav === true)

@withRouter
class Frame extends Component {

    menuIcon = (icon) => {
        switch (icon) {
            case 'DashboardOutlined':
                return <DashboardOutlined />
            case 'UnorderedListOutlined':
                return <UnorderedListOutlined />
            case 'SettingOutlined':
                return <SettingOutlined />
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