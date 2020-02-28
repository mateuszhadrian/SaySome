import React, { Component } from 'react'
import dayjs from 'dayjs'
import relativeTime from 'dayjs/plugin/relativeTime'
import { connect } from 'react-redux'


class Post extends Component {

    openDeletionWindow = (event) => {
        event.stopPropagation();
        this.props.showQuestion(this.props.screamId);
    }
    

    render() {
        dayjs.extend(relativeTime)
        const { user: { authenticated, credentials: { handle }}, post: { userHandle, createdAt, body, userImage, likeCount } } = this.props
        const profilePhoto = {
            backgroundImage: `url(${userImage})`,
            height: '100%',
            maxWidth: '100vw',
            minWidth: '180px',
            backgroundSize: 'cover',
            backgroundPosition: 'center'
        }

        const deleteButton = handle === userHandle && authenticated ? (<button onClick={this.openDeletionWindow} className="post__delete-button"><i className="fas fa-trash"></i></button>) : ( null )

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

const mapActionsToProps = {}

export default connect(mapStateToProps, mapActionsToProps)(Post)
