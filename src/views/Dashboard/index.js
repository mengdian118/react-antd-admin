import React, { Component } from 'react'
import { Card, Row, Col } from 'antd'
import '../../style/admin/dashboard/index.less'
export default class Dashboard extends Component {
    constructor(){
        super()
        this.state = {
            TopCard:{
                top1: '#81D4FA',
                top2: '#4DD0E1',
                top3: '#76FF03',
                top4: '#64FFDA'
            }
        }
    }
    render() {
        return (
            <>
                <Card
                    title="概览"
                    bordered={false}
                >
                        <Row>
                                <Col xs={24} sm={12} md={12} lg={12} xl={6} className="gutter-row" span={6}>
                                    <div className="ra-gutter-box" style={{background:this.state.TopCard.top1}}>col-6</div>
                                </Col>
                                <Col xs={24} sm={12} md={12} lg={12} xl={6}  className="gutter-row" span={6}>
                                    <div className="ra-gutter-box" style={{background:this.state.TopCard.top2}}>col-6</div>
                                </Col>
                                <Col xs={24} sm={12} md={12} lg={12} xl={6}  className="gutter-row" span={6}>
                                    <div className="ra-gutter-box" style={{background:this.state.TopCard.top3}}>col-6</div>
                                </Col>
                                <Col xs={24} sm={12} md={12} lg={12} xl={6}  className="gutter-row" span={6}>
                                    <div className="ra-gutter-box" style={{background:this.state.TopCard.top4}}>col-6</div>
                                </Col>
                        </Row>
                </Card>
                <Card
                    title="最近浏览量"
                    bordered={false}
                ></Card>
            </>
        )
    }
}
