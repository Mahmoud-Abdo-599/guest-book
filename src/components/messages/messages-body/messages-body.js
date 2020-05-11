import React, { Component } from 'react';
import MessageItem from '../message-item/message-item';
import PropTypes from 'prop-types'; 

export class MessagesBody extends Component {

    render() {
        return this.props.messages.map((message) => (
        <MessageItem key={message.id} message={message}
        delMessage={this.props.delMessage} editMessage={this.props.editMessage} />
        ));
    }
}

//PropTypes
MessagesBody.propTypes = {
    messages: PropTypes.array.isRequired ,
    delMessage: PropTypes.func.isRequired ,

}

export default MessagesBody
