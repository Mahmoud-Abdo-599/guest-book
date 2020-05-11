import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './message-item.scss';


export class MessageItem extends Component {
    state = {
        id: '',
        message: 'hellooo'
    }

    edit = (id) => {
        this.id = id
        this.props.editMessage(this.state.id, this.state.message)
    }

    render() {
        const { id, title } = this.props.message;
        return (
            <div className='messages'>
                <div className='message'>
                    <div className='title'>{title}</div>
                </div>
                <div className='buttons'>
                    <button className='button' onClick={this.props.delMessage.bind(this, id)}>Delete</button>
                    <button className='button' onClick={this.edit.bind(this, id)}>EDIT</button>
                </div>
            </div>
        )
    }
}

//PropTypes
MessageItem.propTypes = {
    message: PropTypes.object.isRequired,
    delMessage: PropTypes.func.isRequired,
}


export default MessageItem
