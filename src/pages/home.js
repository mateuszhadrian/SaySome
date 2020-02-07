import React, { Component } from 'react'
import Post from '../components/Post'
import { getPosts } from '../redux/actions/dataActions'
import { connect } from 'react-redux'

class home extends Component {

    componentDidMount = () => {
        this.props.getPosts();
    }

    render() {
        const { posts, loading } = this.props
        let recentPosts = !loading ? (
            posts.map(post => <Post key={post.screamId} post={post} />)     
        ) : <p>loading...</p>
        return (
            <div className='main__container'>
                {recentPosts}
            </div>           
        )
    }
}

const mapStateToProps = (state) => ({
    posts: state.data.posts,
    loading: state.data.loading
})

const mapActionsToProps = {
    getPosts
}

export default connect(mapStateToProps, mapActionsToProps)(home)
