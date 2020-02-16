import React, { Component } from 'react'
import Post from '../components/Post'
import { getPosts } from '../redux/actions/dataActions'
import { connect } from 'react-redux'
import { deletePost, hideAddPostButton, showAddPostButton } from '../redux/actions/dataActions'

class home extends Component {
    state = {
        show: false,
        screamId: null,
    }

    handleDelete = () => {
        this.props.deletePost(this.state.screamId);
        this.hideQuestion();
    }

    componentDidMount = () => {
        this.props.getPosts();
    }

    showQuestion = (screamId) => {
        this.props.hideAddPostButton()
        this.setState({
            show: true,
            screamId,
        })
    }

    hideQuestion = () => {
        this.props.showAddPostButton()
        this.setState({
            show: false,
            screamId: null,
        })
    }

    render() {
        const { posts, loading } = this.props

        const deleteQuestion = this.state.show ? (
            <div className="question__container">
                <div onClick={(e) => e.stopPropagation()} className="question__wrapper">
                    <span className="question__text">Na pewno ??</span>
                    <div className="question__buttons">
                        <button onClick={this.handleDelete} className="question__button question__button--delete">Usuń wypowiedź</button>
                        <button onClick={this.hideQuestion} className="question__button question__button--cancel">Anuluj</button>
                    </div>
                </div>
            </div>
        ) : (null)

        let recentPosts = !loading ? (
            <div onClick={this.hideQuestion} className="main__container">
                {deleteQuestion}
                {posts.map(post => <Post key={post.screamId} screamId={post.screamId} showQuestion={this.showQuestion} post={post} />)} 
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
    getPosts,
    deletePost,
    hideAddPostButton,
    showAddPostButton
}

export default connect(mapStateToProps, mapActionsToProps)(home)
