import React, { Component } from 'react';
import PropTypes from 'prop-types';
import CustomButton from '../../custom-button/CustomButton';
import './add-message.scss';

export class AddMessage extends Component {

    state = {
        title: ''
    }

    onChange = (e) => this.setState({ [e.target.name]: e.target.value });

    onSubmit = (e) => {
        e.preventDefault();
        this.props.addMessage(this.state.title);
        this.setState({ title: '' });
    }

    render() {
        return (
            <form onSubmit={this.onSubmit} style={{ display: 'flex' }}>
                <input
                    className='form-input'
                    type="text"
                    name="title"
                    style={{ flex: '10', padding: '5px' }}
                    placeholder="Add Message ..."
                    value={this.state.title}
                    onChange={this.onChange}
                />
                <CustomButton
                    type='submit'
                    value='submit'>submit message</CustomButton>
            </form>
        )
    }
}
//PropTypes
AddMessage.propTypes = {
    addMessage: PropTypes.func.isRequired
}

export default AddMessage
