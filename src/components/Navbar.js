import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'

class Navbar extends Component {
    render() {

        const { user: { authenticated, loading, credentials : { imageUrl, handle }}} = this.props

        const loggedUserPhoto = {
            marginTop: '8px',
            backgroundImage: `url(${imageUrl})`,
            height: '50px',
            width: '50px',
            maxWidth: '60px',
            borderRadius: '50%',
            backgroundSize: 'cover',
            backgroundPosition: 'center'
        }

        const navbarRight = !loading ? (
            authenticated ? (
                <div className="navbar__profile">
                    <div style={loggedUserPhoto}></div>
                    <span className="profile__username">{handle}</span>
                </div>
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
                <div className='navbar__container'>
                    <Link className='navbar__brand' to="/"><span >SaySome</span></Link>
                    {navbarRight}
                </div>
            </div>
        )
    }
}

const mapStateToProps = (state) => ({
    user: state.user
})

const mapActionsToProps = null;

export default connect(mapStateToProps, mapActionsToProps)(Navbar)
