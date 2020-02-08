import React, { Component } from 'react'
import { connect } from 'react-redux';
import { signupUser } from '../redux/actions/userActions'

class signup extends Component {
    state = {
        email:'',
        password:'',
        confirmPassword:'',
        handle:'',
        errors: {}
    }

    handleChange = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        })
    }

    handleSubmit = (e) => {
        e.preventDefault();

        const newUserLoginCredentials = {
            email: this.state.email,
            password: this.state.password,
            confirmPassword: this.state.confirmPassword,
            handle: this.state.handle
        }

        this.props.signupUser(newUserLoginCredentials)
    }


    
    render() {
        return (
            <div className="signup__flex">
                <div className="signup__background">
                    <div className="signup__form-container">
                        <span className="signup__title">Zarejestruj się</span>
                        <form onSubmit={this.handleSubmit} className='signup__form'>
                           
                                <label htmlFor="email">Email</label>
                                <input onChange={this.handleChange} className="signup-form__input signup-form__input--email" type="email" name="email" id="email"/>
                            
                            
                                <label htmlFor="password">Hasło</label>
                                <input onChange={this.handleChange} className="signup-form__input signup-form__input--password" type="password" name="password" id="password"/>
                            
                            
                                <label htmlFor="confirmPassword">Potwierdź hasło</label>
                                <input onChange={this.handleChange} className="signup-form__input signup-form__input--confirm-password" type="password" name="confirmPassword" id="confirmPassword"/>
                            
                            
                                <label htmlFor="handle">Nazwa użytkownika</label>
                                <input onChange={this.handleChange} className="signup-form__input signup-form__input--handle" type="text" name="handle" id="handle"/>
                                            
                            <button className="form__button">Zarejestruj</button>
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
    signupUser
}

export default connect(mapStateToProps, mapActionsToProps)(signup)
