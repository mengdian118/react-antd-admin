import React, { Component } from 'react'
import { Card, Button, List, Badge, Spin } from 'antd'
import { connect } from 'react-redux'
import { markNotification,markAllNotification } from '../../actions/notification'
const mapState = state => {
    const { list, isLoading } = state.notifications
    return {
        list,
        isLoading
    }
}
@connect(mapState, { markNotification,markAllNotification })
class Notifications extends Component {
    No = 1
    render() {
        return (
            <Spin spinning={this.props.isLoading}>
                <Card
                    title="通知中心"
                    extra={<Button 
                            onClick={this.props.markAllNotification}
                            disabled={this.props.list.every(item => item.hasRead === true)}
                        >全部标记为已读</Button>}
                >
                    <List
                        itemLayout="horizontal"
                        dataSource={this.props.list}
                        renderItem={(item,key) => (
                                
                                <List.Item onClick={this.props.markNotification.bind(this, item.id)} className="noticeItem" style={ !item.hasRead ? null : { filter: 'opacity(0.5)', pointerEvents: 'none'}}>
                                    <List.Item.Meta
                                        title={<Badge dot={!item.hasRead} offset={[5, 1]}>{key+1}、{item.title}</Badge>}
                                        description={item.desc}
                                    />
                                </List.Item>
                            
                        )}
                    />
                </Card>
            </Spin>
        )
    }
}
export default Notifications
