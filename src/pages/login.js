import React, { Component } from 'react'
import { connect } from 'react-redux';
import { loginUser } from '../redux/actions/userActions'

class login extends Component {
    state = {
        email:'',
        password:'',
        errors: {}
    }

    handleChange = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        })
    }

    handleSubmit = (e) => {
        e.preventDefault();

        const loginCredentials = {
            email: this.state.email,
            password: this.state.password
        }

        this.props.loginUser(loginCredentials)
        console.log(this.props)
    }


    
    render() {
    const errorMessage = this.props.UI.errors && (
            <div className="form__error-container">
                <p className="form__error">{this.props.UI.errors.general}</p>
            </div> 
    )
        return (
            <div className="login__flex">
                <div className="login__background">
                    <div className="login__form-container">
                        <span className="login__title">Zaloguj się</span>
                        <form noValidate onSubmit={this.handleSubmit} className='login__form'>
                            <label htmlFor="email">Email</label>
                            <input onChange={this.handleChange} className="form__input form__input--email" type="email" name="email" id="email"/>
                            <label htmlFor="password">Hasło</label>
                            <input onChange={this.handleChange} className="form__input form__input--password" type="password" name="password" id="password"/>
                            {errorMessage}
                            <button className="form__button">Zaloguj</button>
                        </form>
                    </div>
                </div>
            </div>
        )
    }
}

const mapStateToProps = (state) => ({
    user: state.user,
    UI: state.UI,
})

const mapActionsToProps = {
    loginUser
}

export default connect(mapStateToProps, mapActionsToProps)(login)
