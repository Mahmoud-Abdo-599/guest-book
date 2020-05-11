import React, { Component } from 'react';
import uuid from 'react-uuid';
import './messages.scss';

import './messages.scss';
import MessagesBody from './messages-body/messages-body';
import AddMessage from './add-message/add-message';



class Messages extends Component {
    state = {
        messages: [
            {
                id: uuid(),
                title: 'wish you a happy life',
            }
        ]

    }


    delMessage = (id) => {
        this.setState({ messages: [...this.state.messages.filter(message => message.id !== id)] })
    }

    editMessage = (id, message) => {
        const newMessage = {
            id: id,
            title: message
        }
        return (
            this.delMessage(id),
            this.setState({ messages: [...this.state.messages, newMessage] })
        )

    }


    addMessage = (title) => {
        const newMessage = {
            id: uuid(),
            title,
        }
        this.setState({ messages: [...this.state.messages, newMessage] })
    }



    render() {

        return (

            <div className='messages'>
                <AddMessage addMessage={this.addMessage} />
                <MessagesBody messages={this.state.messages}
                    delMessage={this.delMessage} editMessage={this.editMessage} />

            </div>

        )
    }
}

export default Messages;
