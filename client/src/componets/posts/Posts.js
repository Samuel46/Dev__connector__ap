import React, { Fragment } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { getPosts } from '../../actions/post'
import Spinner from '../layouts/Spinner'
import { useEffect } from 'react'
import PostItem from './PostItem'
import PostForm from './PostForm'

function Posts({ getPosts, post: {
    posts, loading
} }) {

    useEffect(() => {
        getPosts()
    }, [getPosts])

    return (
        loading ? <Spinner /> : <Fragment>
            <h1 className="large text-primary">Home Work</h1>
            <p className="lead"><i className="fas da-user"></i>Welcome to the community</p>
            {/* Create home work form */}
            <PostForm />
            <div className="posts">
                {posts.map(post => (
                    <PostItem key={post._id} post={post} />
                ))}
            </div>
        </Fragment>
    )
}

Posts.propTypes = {
    getPosts: PropTypes.func.isRequired,
    post: PropTypes.object.isRequired,
}
const mapStateToProps = state => ({
    post: state.post
})

export default connect(mapStateToProps, { getPosts })(Posts)

