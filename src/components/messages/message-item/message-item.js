import React, { Component } from 'react';
import Modal from 'react-modal';
import PropTypes from 'prop-types';
import './message-item.scss';
import MsgTitle from './message-title/message-title';


export class MessageItem extends Component {
    state = {
        id: '',
        message: '',
        comment: '',
        showEditModal1: false,
        showEditModal2: false
    }

    componentWillMount() {
        Modal.setAppElement('body');
    }

    handleTitleChange = (e) => {
        console.log('target value', e.target.value);
        this.setState({ message: e.target.value })
    }

    edit = (id) => {
        this.setState({ showEditModal1: true })
        this.setState({ id: id });
        console.log('id', id)
    }

    handleEditSubmit = (event) => {
        event.preventDefault();
        this.setState({ showEditModal1: false });
        console.log('edit submit', this.state.id, this.state.message);
        this.props.editMessage(this.state.id, this.state.message)
    }



    handleCommentAdd = (e) => {
        console.log('target value', e.target.value);
        this.setState({ comment: e.target.value })
    }

    addComment = (id) => {
        this.setState({ showEditModal2: true })
        this.setState({ id: id });
        console.log('id', id)
    }

    handleAddCommentSubmit = (event) => {
        event.preventDefault();
        this.setState({ showEditModal2: false });
        console.log('comment submit', this.state.id, this.state.comment);
        this.props.replyMessage(this.state.id, this.state.comment)
    }


    closeEditModal = () => {
        this.setState({ showEditModal1: false, showEditModal2: false })
    }

    render() {
        const { id, title} = this.props.message;
        const { showEditModal1, showEditModal2 } = this.state;
        return (
            <div className='messages'>
                <Modal
                    className='modal'
                    isOpen={showEditModal1}
                    onRequestClose={this.closeEditModal}
                    contentLabel="Example Modal">
                    <div className='modal-content'>
                        <div className='title'>Edit Message</div>
                        <form className='form-modal' onSubmit={this.handleEditSubmit}>
                            <input className='input-msg' type='text' defaultValue={title} onChange={this.handleTitleChange} />
                            <button className='btn-submit' type='submit'>submit</button>
                        </form>
                        <div className='btn-close-holder'>
                            <button className='btn-close' onClick={this.closeEditModal}>close</button>
                        </div>
                    </div>
                </Modal>
                <Modal
                    className='modal'
                    isOpen={showEditModal2}
                    onRequestClose={this.closeEditModal}
                    contentLabel="Example Modal">
                    <div className='modal-content'>
                        <div className='title'>Reply To Message</div>
                        <form className='form-modal' onSubmit={this.handleAddCommentSubmit}>
                            <input className='input-msg' type='text'  onChange={this.handleCommentAdd} />
                            <button className='btn-submit' type='submit'>submit</button>
                        </form>
                        <div className='btn-close-holder'>
                            <button className='btn-close' onClick={this.closeEditModal}>close</button>
                        </div>
                    </div>
                </Modal>
                <MsgTitle message={this.props.message} />
                
                <div className='buttons'>
                    <button className='button' onClick={this.props.delMessage.bind(this, id)}>Delete</button>
                    <button className='button' onClick={() => this.edit(id)}>EDIT</button>
                    <button className='button' onClick={() => this.addComment(id)}>Reply</button>
                </div>
            </div>
        )
    }
}

//PropTypes
MessageItem.propTypes = {
    message: PropTypes.object.isRequired,
    delMessage: PropTypes.func.isRequired,
    editMessage: PropTypes.func.isRequired,
    replyMessage: PropTypes.func.isRequired
}


export default MessageItem
