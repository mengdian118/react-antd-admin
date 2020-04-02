import React, { Component } from 'react'
import withCopyRight from './withCopyRight.js'

@withCopyRight
class SpanTxt extends Component {
    render() {
        return (
            <div>
                这是高阶组件被拦截的内容 &emsp;{this.props.name}
            </div>
        )
    }
}
export default SpanTxt