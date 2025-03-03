import React, { Component } from 'react'
import './ColorBox.css'

export default class ColorBox extends Component {
    changeColor(color) {
        this.props.onChangeColor(color)
    }
    render() {
        return (
            <div onClick={this.changeColor.bind(this, this.props.color)} className='color-box' style={{ backgroundColor: this.props.color }}></div>
        )
    }
}
