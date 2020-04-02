import React, { Component, Fragment } from 'react'

 const withCopyRight = (YourComponent) => {
     return class withCopyRight extends Component {
        render() {
            return (
                <Fragment>
                    <YourComponent {...this.props} />
                    这是高阶组件内容
                </Fragment>
            )
        }
    }
 }

 export default withCopyRight
