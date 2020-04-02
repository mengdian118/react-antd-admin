import React, { Component } from 'react'
import { connect } from 'react-redux'
import HeaderTitle from '../HeaderTitle'
import { fetchBlogList } from '../../actions/blog'
class BlogList extends Component {
    componentDidMount() {
        this.props.fetchBlogList()
    }
    render() {
        const {
            list,
            isLoading,
            errMsg
        } = this.props
        const hasError = Boolean(errMsg)
        return (
            <div>
                <HeaderTitle title="三、BlogList" />
                <h4>***借助redux+react-redux+redux-thunk+axios，实现BlogList***</h4>
                {
                    isLoading
                        ?
                        <div>loading......</div>
                        :
                        (
                            hasError
                                ?
                                <div>{errMsg}</div>
                                :
                                <ol>
                                    {

                                        list.map(item => {
                                            return (

                                                <li key={item.id}>
                                                    <h4>{item.title}</h4>
                                                    <span>{item.body}</span>
                                                </li>
                                            )
                                        })
                                    }
                                </ol>
                        )
                }

            </div>
        )
    }
}
const mapState = (state) => {
    return {
        list: state.blog.list,
        isLoading: state.blog.isLoading,
        errMsg: state.blog.errMsg
    }
}
export default connect(mapState, { fetchBlogList })(BlogList)