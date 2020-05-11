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
        console.log(id, message);
        const {messages} = this.state;
        console.log('messages', messages);
        const objIndex = messages.findIndex(obj => obj.id === id);
        console.log('objIndex', objIndex);
        const updatedObj = {...messages[objIndex], title: message};

        const updatedMessages = [
            ...messages.slice(0, objIndex),
            updatedObj,
            ...messages.slice(objIndex + 1),
        ];

        console.log('updatedMessages', updatedMessages);
        this.setState({messages: updatedMessages})
                 
        // const newMessage = {
        //     id: id,
        //     title: message
        // }
        // return (
        //     this.delMessage(id),
        //     this.setState({ messages: [...this.state.messages, newMessage] })
        // )

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
