import React, { Component } from 'react'

class AddPostWindow extends Component {
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
                    <span className="add-post-window__errors"></span>
                    <div className="add-post-window__form-container">
                        <textarea className="add-post-window__textarea"></textarea>
                        <div className="add-post-window__buttons">
                            <button className="add-post-window__button">powiedz to!</button>
                            <button onClick={this.props.hideAddPostWindow} className="add-post-window__button">nie mów...</button>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default AddPostWindow
