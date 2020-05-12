import React, { Component } from 'react';
import './message-title.scss';

export class MsgTitle extends Component {
    render() {
        const { title, commentTitle } = this.props.message;

        if (commentTitle[0] !== undefined) {
            return (
                <React.Fragment>
                    <div className='message'>
                        <div className='title'>{title}</div>
                    </div>
                    <div className='reply'>
                        <div className='reply-content'>
                            <div className='reply-hint'>Reply :</div>
                            {commentTitle}</div>
                    </div>
                </React.Fragment>

            )
        } else {
            return (
                <div className='message'>
                    <div className='title'>{title}</div>
                </div>
            )
        }

    }
}

export default MsgTitle
