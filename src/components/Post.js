import React, { Component } from 'react'
import dayjs from 'dayjs'
import relativeTime from 'dayjs/plugin/relativeTime'

class Post extends Component {
    render() {
        dayjs.extend(relativeTime)
        const { post: { userHandle, createdAt, body, userImage, likeCount } } = this.props
        console.log(userHandle)
        const profilePhoto = {
            backgroundImage: `url(${userImage})`,
            height: '100%',
            width: '220px',
            minWidth: '220px',
            backgroundSize: 'cover',
            backgroundPosition: 'center'
        }

        return (
            <div className='main__post'>
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
        )
    }
}

export default Post
