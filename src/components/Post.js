import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import dayjs from 'dayjs'
import relativeTime from 'dayjs/plugin/relativeTime'
import { connect } from 'react-redux'
import { likePost, unlikePost } from '../redux/actions/dataActions'


class Post extends Component {

    openDeletionWindow = (event) => {
        event.stopPropagation();
        this.props.showQuestion(this.props.screamId);
    }

    likedPost = (screamId) => {
        return this.props.user.likes && this.props.user.likes.find(like => like.screamId === screamId);
    }

    likePost = () => {
        this.props.likePost(this.props.post.screamId)
    }

    unlikePost = () => {
        this.props.unlikePost(this.props.post.screamId)
    }

    

    render() {
        dayjs.extend(relativeTime)
        const { user: { authenticated, credentials: { handle }}, post: { screamId, userHandle, createdAt, body, userImage, likeCount } } = this.props
        const profilePhoto = {
            backgroundImage: `url(${userImage})`,
            height: '100%',
            maxWidth: '100vw',
            minWidth: '180px',
            backgroundSize: 'cover',
            backgroundPosition: 'center'
        }


        const deleteButton = handle === userHandle && authenticated ? (<button onClick={this.openDeletionWindow} className="post__delete-button"><i className="fas fa-trash"></i></button>) : ( null )

        const likeButton = !authenticated ? (
            <Link to="/logowanie">
                <i className="post__like-button far fa-heart"></i>
            </Link>
        ) : (
            this.likedPost(screamId) ? (
                <i onClick={this.unlikePost} className="post__like-button fas fa-heart"></i>
            ) : (
                <i onClick={this.likePost} className="post__like-button far fa-heart"></i>
            )
        )
        return (
            <div className='main__post'>
                <div className="post__photo-content">
                <div className="post__photo-wrapper">
                    <div style={profilePhoto}></div>
                </div>
                    <div className='post__content'>
                        <div className='post__header'>
                            <h1 className='post__handle'>{userHandle}</h1>
                            <span className='post__when'>{dayjs(createdAt).fromNow()}</span>  
                            <hr className='post__hr'/>
                        </div>
                        <p className='post__text'>{body}</p> 
                        <h3 className='post__likes'>{likeButton} {likeCount}</h3>
                    </div>   
                </div>              
                        {deleteButton}
                </div>
        )
    }
}

const mapStateToProps = (state) => ({
    user: state.user
})

const mapActionsToProps = {
    likePost,
    unlikePost
}

export default connect(mapStateToProps, mapActionsToProps)(Post)
