import React, { Component } from 'react'
import HeaderTitle from '../HeaderTitle'
import SpanTxt from './SpanTxt'
export default class HocComponent extends Component {
    render() {
        return (
            <div>
                <HeaderTitle title="一、利用修饰符展示高阶组件：" />
                <SpanTxt name="被当作高阶组件参数的SpanTxt组件(这是自定义组件)传值"/>
            </div>
        )
    }
}
