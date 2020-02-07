import React, { Component } from 'react'
import testphoto from '../test/testphoto.jpg'

class Post extends Component {
    render() {
        const profilePhoto = {
            backgroundImage: `url(${testphoto})`,
            height: '100%',
            width: '220px',
            backgroundSize: 'cover',
            backgroundPosition: 'center'
        }

        return (
            <div className='main__post'>
                    <div style={profilePhoto}></div>
                    <div className='post__content'>
                        <div className='post__header'>
                            <p className='post__handle'>Mateusz</p>
                            <span className='post__when'>2 godziny temu</span>  
                        </div>
                        <p className='post__text'>Testowy post, który jest tu po to, żeby zobaczyć jak będzie rozmieszczony tekst w poście</p> 
                        <h3 className='post__likes'>10 osób lubi to</h3>
                    </div>        
                </div>
        )
    }
}

export default Post
