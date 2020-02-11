import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'
import { logoutUser } from '../redux/actions/userActions'

class Navbar extends Component {
    state = {
        show: false
    }
showOptions = () => {
    return this.setState({
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
                <button onClick={this.showOptions} className="profile__button">
                    <div className="navbar__profile">
                        <div className="profile__picture" style={loggedUserPhoto}></div>
                        <span className="profile__username">{handle}</span>
                </div>
                </button>
            ) : (
                <div className="navbar__buttons-area">
                        <Link className="navbar__button navbar__button--signup" to="/rejestracja"><span >rejestracja</span></Link> 
                        <Link className="navbar__button navbar__button--login" to="/logowanie"><span >logowanie</span></Link> 
                </div>
            )
        ) : (
            <div></div>
        )
        return (
            <div className='navbar'>
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
    user: state.user
})

const mapActionsToProps = {
    logoutUser
};

export default connect(mapStateToProps, mapActionsToProps)(Navbar)
