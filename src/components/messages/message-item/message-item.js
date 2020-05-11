import React, { Component } from 'react';
import PropTypes from 'prop-types';


export class MessageItem extends Component {
    
    render() {
        const {id , title} = this.props.message ;
        return (
            <div>
                <p>
                    {title}
                    <button onClick={this.props.delMessage.bind(this,id)}>x</button>
                </p>
            </div>
        )
    }
}

//PropTypes
MessageItem.propTypes = {
    message: PropTypes.object.isRequired ,
    delMessage: PropTypes.func.isRequired ,
}


export default MessageItem
