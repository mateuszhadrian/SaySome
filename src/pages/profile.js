import React, { Component } from 'react'
import { connect } from 'react-redux'
import { getUserData, uploadImage } from '../redux/actions/userActions'
import dayjs from 'dayjs'
import EditProfile from '../components/EditProfile'

class profile extends Component {
    state = {
        show: false
    }

    componentDidMount = () => {
        this.props.getUserData();
    }

    showEditProfile = () => {
        this.setState({
            show: true
        })
    }

    hideEditProfile = () => {
        this.setState({
            show:false
        })
    }

    handleImageChange = (e) => {
        const image = e.target.files[0];
        const formData = new FormData();
        image && (formData.append('image', image, image.name))
        this.props.uploadImage(formData)
    }

    handleUploadImage = () => {
        document.getElementById('imageInput').click()
    }

    render() {
        const { user: { authenticated, loading, credentials: { handle, imageUrl, bio, website, location, createdAt, email } }} = this.props

        const profilePhoto = {
            display: 'flex',
            justifyContent: 'flex-end',
            alignItems: 'flex-end',
            margin: '12px',
            backgroundImage: `url(${imageUrl})`,
            height: '150px',
            width: '180px',
            borderRadius: '60px',
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            boxShadow: '10px 10px 14px 1px rgba(00,00,00,0.1)'
        }

        const editProfileCard = this.state.show ? (
            <EditProfile hideEditProfile={this.hideEditProfile}/>
        ) : (null)

        const profileContent = authenticated ? (
            <div className="profile-page__container">
                <div className="profile-page__image" style={profilePhoto}>
                <input type="file" id="imageInput" hidden="hidden" onChange={this.handleImageChange}/>
                <button onClick={this.handleUploadImage} className="profile-page__image-button"><i className="fas fa-user-edit"></i></button>
                </div>
                <div className="profile-page__handle-container">
                    <span className="profile-page__handle">{handle}</span>
                    <span className="profile-page__email">{email}</span>
                </div>
                <button onClick={this.showEditProfile} className="profile-page__edit-profile"><i className="fas fa-pen-fancy"></i>Edytuj dane</button>
                {bio ? (<span className="profile-page__bio">{bio}</span>) : (<span className="profile-page__bio">brak opisu ...</span>)}
                <hr/>
                <div className="profile-page__additional-data">
                    {location && <span className="profile-page__location"><i className="fas icon fa-map-marker-alt"></i>{location}</span>}
                    {website && <span className="profile-page__website"><a className="profile-page__website-link" target="_blank" href={website}><i className="fas icon fa-globe-europe"></i>{website}</a></span>}
                </div>
                    <span className="profile-page__createdAt">konto od: {dayjs(createdAt).format('MMM YYYY')}</span>
                
            </div>
            ) : (
                <div className="profile-page__not-logged-in">Nie jesteś zalogowany</div>
            )
        return (
            <div className="profile-page__body">
                {editProfileCard}
                <div className="profile-page__flex">
                    <div className="profile-page__background">
                        {profileContent}
                    </div>
                </div>
            </div>

        )
    }
}

const mapStateToProps = (state) => ({
    user: state.user
})

const mapActionsToProps = {
    getUserData,
    uploadImage
}

export default connect(mapStateToProps, mapActionsToProps)(profile)
