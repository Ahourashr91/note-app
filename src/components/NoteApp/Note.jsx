import React, { Component } from 'react'

export default class Note extends Component {
    removeHandler(id){
        this.props.onRemove(id)
    }
    render() {
        let {title , id , backgroundColor} = this.props
        return (
            <div className='card-parent'>
                <div className="card" onClick={this.removeHandler.bind(this , id)} style={{ backgroundColor: backgroundColor }}><p>{title}</p></div>
            </div>
        )
    }
}
