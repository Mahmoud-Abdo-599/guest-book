import MessagesActionTypes from './messages.types';

export const addMessage = item => ({
    type: MessagesActionTypes.ADD_MESSAGE,
    payload: item
});