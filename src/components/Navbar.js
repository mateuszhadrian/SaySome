import React, { Component } from 'react'

class Navbar extends Component {
    render() {
        return (
            <div className='navbar'>
                <div className='navbar__container'>
                    <span className='navbar__brand'>SaySome</span>
                    <div className="navbar__buttons-area">
                        <span className="navbar__button navbar__button--signup">rejestracja</span>
                        <span className="navbar__button navbar__button--login">logowanie</span>
                    </div>
                </div>
            </div>
        )
    }
}

export default Navbar
