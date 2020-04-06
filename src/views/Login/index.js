import React, { Component } from 'react'
import { Form, Input, Button, Checkbox } from 'antd';
import {connect} from 'react-redux'
import {userLogin} from '../../actions/user'
import {Redirect} from 'react-router-dom'
import { UserOutlined, LockOutlined } from '@ant-design/icons';
import './admin-login.less'

const mapState = state => {
        return {
            isLogin: state.user.isLogin,
            isLoading: state.user.isLoading
        }
}

@connect(mapState,{userLogin})
 class Login extends Component {
  
    render() {
        const onFinish = values => {
            this.props.userLogin(values)
          };
        return (
            this.props.isLogin 
            ?
            <Redirect to="/admin" />
            :
            
                <div className="ra-admin-login">
                    <Form
                        name="normal_login"
                        className="login-form ra-loginform"
                        initialValues={{
                        remember: true,
                        }}
                        onFinish={onFinish}
                    >
                        <h2>后台管理系统登录</h2>
                        <Form.Item
                        name="username"
                        rules={[
                            {
                            required: true,
                            message: '用户名不能为空！',
                            }
                        ]}
                        >
                        <Input disabled={this.props.isLoading} prefix={<UserOutlined className="site-form-item-icon" />} placeholder="Username" autoComplete="off"/>
                        </Form.Item>
                        <Form.Item
                        name="password"
                        rules={[
                            {
                            required: true,
                            message: '密码不能为空！',
                            },
                        ]}
                        >
                        <Input disabled={this.props.isLoading}
                            prefix={<LockOutlined className="site-form-item-icon" />}
                            type="password"
                            placeholder="Password"
                        />
                        </Form.Item>
                        <Form.Item>
                        <Form.Item name="remember" valuePropName="checked" noStyle>
                            <Checkbox  disabled={this.props.isLoading} >记住我</Checkbox>
                        </Form.Item>
                        </Form.Item>
                        <span style={{display: 'inline-block',marginBottom: '20px'}}>username：<b style={{color:'#1890ff'}}>admin</b>；password：<b style={{color:'#1890ff'}}>123456</b></span>
                        <Form.Item>
                        <Button loading={this.props.isLoading} type="primary" style={{width:'100%'}} htmlType="submit" className="login-form-button">
                            Log in
                        </Button>
                        </Form.Item>
                </Form>
            </div>
            
        )
    }
}
export default Login