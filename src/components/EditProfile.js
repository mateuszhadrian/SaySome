import React, { Component } from 'react'
import { connect } from 'react-redux'
import { editUserDetails } from '../redux/actions/userActions'

class EditProfile extends Component {
    state = {
        bio: '',
        website: '',
        location: ''
    }

    handleChange = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        })
    }

    handleSubmit = (e) => {
        e.preventDefault();
        const userDetails = {
            bio: this.state.bio,
            location: this.state.location,
            website: this.state.website
        }
        
        this.props.editUserDetails(userDetails)
        this.props.hideEditProfile();
    }

    componentDidMount(){
        const { user: { credentials }} = this.props
        this.mapUserDataToState(credentials)
    }

    mapUserDataToState = (credentials) => {
        this.setState({
            bio: credentials.bio ? credentials.bio : '',
            website: credentials.website ? credentials.website : '',
            location: credentials.location ? credentials.location : ''
        })
    }

    render() {
        return (
            <div className="edit__container">
                <div className="edit__card">
                    <div className="edit__form__wrapper">
                        <span className="edit__header">Edytuj dane</span>
                        <form className="edit__form">
                            <label htmlFor="bio">Opis</label>
                            <input onChange={this.handleChange} value={this.state.bio} className="edit__form-input" type="text" id="bio" name="bio"/>
                            <label htmlFor="location">Lokalizacja</label>
                            <input onChange={this.handleChange} value={this.state.location} className="edit__form-input" type="text" id="location" name="location"/>
                            <label htmlFor="website">Strona internetowa</label>
                            <input onChange={this.handleChange} value={this.state.website} className="edit__form-input" type="text" id="website" name="website"/>
                            <div className="edit__buttons-container">
                                <button onClick={this.handleSubmit} className="edit__form-button">Zapisz</button>
                                <button onClick={this.props.hideEditProfile} className="edit__form-button">Anuluj</button>
                            </div>
                            
                        </form>
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
    editUserDetails
}

export default connect(mapStateToProps, mapActionsToProps)(EditProfile)
