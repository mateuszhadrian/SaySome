import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'
import { logoutUser, clearErrors } from '../redux/actions/userActions'
import { CircularProgress } from '@material-ui/core'

class Navbar extends Component {
    state = {
        show: false
    }

toggleOptions = (e) => {
    e.stopPropagation();
    this.setState({
        show: !this.state.show
    })
}

logout = () => {
    this.props.logoutUser()
    this.setState({
        show: false
    })
}

hideOptions = () => {
    this.setState({
        show: false
    })
}

clearErrors = () => {
    this.props.clearErrors()
}

    render() {

        const { user: { authenticated, loading, credentials : { imageUrl, handle }}} = this.props

        const loggedUserPhoto = {
            marginTop: '0',
            backgroundImage: `url(${imageUrl})`,
            height: '50px',
            width: '50px',
            maxWidth: '60px',
            borderRadius: '50%',
            backgroundSize: 'cover',
            backgroundPosition: 'center'
        }


        const optionsDropdown = this.state.show && (
            <div className="options__container">
                <div className="options">
                    <ul className="options__items">
                        <li className="options__item"><Link to="/profil" onClick={this.hideOptions}><button className="options__button">PROFIL</button></Link></li>
                        <li className="options__item"><button onClick={this.logout} className="options__button"><span className="logout">WYLOGUJ</span></button></li>
                    </ul>
                </div>
            </div>
        )

        const navbarRight = !loading ? (
            authenticated ? (
                <>
                {this.props.data.button&&<button onClick={this.props.showAddPostWindow} className="navbar__add-post">
                    <span className="add-post add-post__text">powiedz coś</span>
                    <span className="add-post add-post__plus">+</span>
                </button>}
                <button onClick={this.toggleOptions} className="profile__button">
                    <div className="navbar__profile">
                        <div className="profile__picture" style={loggedUserPhoto}></div>
                        <span className="profile__username">{handle}</span>
                </div>
                </button>
                </>
            ) : (
                <div className="navbar__buttons-area">
                        <Link className="navbar__button navbar__button--signup" to="/rejestracja"><span onClick={this.clearErrors}>rejestracja</span></Link> 
                        <Link className="navbar__button navbar__button--login" to="/logowanie"><span onClick={this.clearErrors}>logowanie</span></Link> 
                </div>
            )
        ) : (
            <CircularProgress color="#0E1C36" className="photo__loading"/>
        )
        return (
            <div onClick={this.hideOptions} className='navbar'>
                <div className="profile__options-container">
                    <div className='navbar__container'>
                        <Link className='navbar__brand' to="/"><span >SaySome</span></Link>
                        {navbarRight}
                    </div>
                    {optionsDropdown}
                </div> 
            </div>
        )
    }
}

const mapStateToProps = (state) => ({
    user: state.user,
    data: state.data
})

const mapActionsToProps = {
    logoutUser,
    clearErrors
};

export default connect(mapStateToProps, mapActionsToProps)(Navbar)
