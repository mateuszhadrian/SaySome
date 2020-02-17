import React, { Component } from 'react'
import { connect } from 'react-redux';
import { signupUser } from '../redux/actions/userActions'
import{ CircularProgress } from '@material-ui/core'

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

        const { UI: { loading }} = this.props
        const signupProgress = loading ? <div className="button__progress"><CircularProgress color="white"/></div> : ( 'Zarejestruj' )
        
        const errorMessage = this.props.UI.errors && this.props.UI.errors.confirmPassword ? (
            <div className="form__error-container">
                <p className="form__error">{this.props.UI.errors.confirmPassword}</p>
            </div> 
    ) : ( this.props.UI.errors && this.props.UI.errors.handle ? (
        <div className="form__error-container">
                <p className="form__error">{this.props.UI.errors.handle}</p>
            </div>
    ) : ( this.props.UI.errors && this.props.UI.errors.email ? (
        <div className="form__error-container">
                    <p className="form__error">{this.props.UI.errors.email}</p>
                </div>
    ) : (
        this.state.password.length !== 0 && this.state.password.length < 6 && <div className="form__error-container">
                    <p className="form__error">Hasło musi mieć conajmniej 6 znaków</p>
                </div>
    )
            
    ) )
        
        return (
            <div className="signup__flex">
                <div className="signup__background">
                    <div className="signup__form-container">
                        <span className="signup__title">Zarejestruj się</span>
                        <form autoComplete='off' onSubmit={this.handleSubmit} className='signup__form'>

                        <label htmlFor="handle">Nazwa użytkownika</label>
                                <input onChange={this.handleChange} className="signup-form__input signup-form__input--handle" type="text" name="handle" id="handle"/>

                           
                                <label htmlFor="email">Email</label>
                                <input onChange={this.handleChange} className="signup-form__input signup-form__input--email" type="email" name="email" id="email"/>
                            
                            
                                <label htmlFor="password">Hasło</label>
                                <input onChange={this.handleChange} className="signup-form__input signup-form__input--password" type="password" name="password" id="password"/>
                            
                            
                                <label htmlFor="confirmPassword">Potwierdź hasło</label>
                                <input onChange={this.handleChange} className="signup-form__input signup-form__input--confirm-password" type="password" name="confirmPassword" id="confirmPassword"/>
                                {errorMessage}
                                            
                            <button className="form__button">{signupProgress}</button>
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
