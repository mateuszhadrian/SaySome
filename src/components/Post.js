import React, { Component } from 'react'
import dayjs from 'dayjs'
import relativeTime from 'dayjs/plugin/relativeTime'
import { connect } from 'react-redux'
import { deletePost } from '../redux/actions/dataActions'

class Post extends Component {


    handleDelete = () => {
        this.props.deletePost(this.props.post.screamId)
    }

    render() {
        dayjs.extend(relativeTime)
        const { user: { credentials: { handle }}, post: { userHandle, createdAt, body, userImage, likeCount } } = this.props
        const profilePhoto = {
            backgroundImage: `url(${userImage})`,
            height: '100%',
            width: '220px',
            minWidth: '220px',
            backgroundSize: 'cover',
            backgroundPosition: 'center'
        }

        const deleteButton = handle=== userHandle ? (<button onClick={this.handleDelete} className="post__delete-button"><i className="fas fa-trash"></i></button>) : ( null )

        return (
            <div className='main__post'>
                <div className="post__photo-content">
                <div style={profilePhoto}></div>
                    <div className='post__content'>
                        <div className='post__header'>
                            <p className='post__handle'>{userHandle}</p>
                            <span className='post__when'>{dayjs(createdAt).fromNow()}</span>  
                        </div>
                        <p className='post__text'>{body}</p> 
                        <h3 className='post__likes'>{likeCount} osób lubi to</h3>
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
    deletePost
}

export default connect(mapStateToProps, mapActionsToProps)(Post)
