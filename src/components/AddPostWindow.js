import React, { Component } from 'react'
import { connect } from 'react-redux'
import { addPost } from '../redux/actions/dataActions'

class AddPostWindow extends Component {
    state = {
        body : '',
        errors : ''
    }

    handleAddPost = () => {
        const postContent = {
            body: this.state.body
        }
        if (this.state.body !== '') {
            this.props.addPost(postContent);
            this.props.hideAddPostWindow();
                this.setState({
                    errors: ''
                })
        } else {
            this.setState({
                errors: 'Pole nie może być puste'
            })
        }
    }

    handleChange = (e) => {
        this.setState({
            [e.target.name]: e.target.value,
            errors: ''
        })

    }

    render() {
        return (
            <div className="add-post-window__container">
                <div className="add-post-window__flex">
                    <div className="add-post-window__header">
                        <div className="saysymbol">
                            <span className="saysymbol__text">powiedz coś</span>
                            <span className="saysymbol__plus">+</span>
                        </div>
                    </div>
                    <span className="add-post-window__errors">{this.state.errors}</span>
                    <div className="add-post-window__form-container">
                        <textarea onChange={this.handleChange} name="body" className="add-post-window__textarea"></textarea>
                        <div className="add-post-window__buttons">
                            <button onClick={this.handleAddPost} className="add-post-window__button">powiedz to!</button>
                            <button onClick={this.props.hideAddPostWindow} className="add-post-window__button">nie mów...</button>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

const mapStateToProps = null;

const mapActionsToProps = {
    addPost
}

export default connect(mapStateToProps, mapActionsToProps)(AddPostWindow)
