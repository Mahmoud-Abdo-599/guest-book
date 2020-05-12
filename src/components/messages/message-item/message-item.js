import React, { Component } from 'react';
import Modal from 'react-modal';
import PropTypes from 'prop-types';
import './message-item.scss';


export class MessageItem extends Component {
    state = {
        id: '',
        message: '',
        showEditModal: false
    }

    componentWillMount() {
        Modal.setAppElement('body');
    }

    handleTitleChange = (e) => {
        console.log('target value', e.target.value);
        this.setState({ message: e.target.value })
    }

    edit = (id) => {
        this.setState({ showEditModal: true })
        this.setState({ id: id });
        console.log('id', id)
    }

    handleEditSubmit = (event) => {
        event.preventDefault();
        this.setState({ showEditModal: false });
        console.log('edit submit', this.state.id, this.state.message);
        this.props.editMessage(this.state.id, this.state.message)
    }

    closeEditModal = () => {
        this.setState({ showEditModal: false })
    }

    render() {
        const { id, title } = this.props.message;
        const { showEditModal } = this.state;
        return (
            <div className='messages'>
                <Modal
                    className='modal'
                    isOpen={showEditModal}
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
                <div className='message'>
                    <div className='title'>{title}</div>
                </div>
                <div className='buttons'>
                    <button className='button' onClick={this.props.delMessage.bind(this, id)}>Delete</button>
                    <button className='button' onClick={() => this.edit(id)}>EDIT</button>
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
