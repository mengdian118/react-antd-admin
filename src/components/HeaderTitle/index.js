import React, {Fragment} from 'react'
// import propTypes from 'prop-types'
export default function HeaderTitle(props) {
    return (
        <Fragment>
            <h2>{props.title}</h2>
        </Fragment>
    )
}
HeaderTitle.defaultProps = {
     title: '我是标题'
}