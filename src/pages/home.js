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
            <div className="main__container">
                {posts.map(post => <Post key={post.screamId} post={post} />)} 
            </div>              
        ) : (
            <div className="saysome__flex">
                <div className="saysome__background">
                    <span className="saysome__logo">SaySome</span>
                </div>
            </div>
        )
        return recentPosts;
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
