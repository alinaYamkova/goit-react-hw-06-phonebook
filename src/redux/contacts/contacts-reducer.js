import { createReducer } from '@reduxjs/toolkit';
import { combineReducers } from 'redux'
import { addContacts, deleteContacts, filterContacts } from './contacts-actions';

const items = createReducer([], {
    [addContacts]: (state, { payload }) => [...state, payload],
    [deleteContacts]: (state, { payload }) => state.filter(({ id }) => id !== payload),
});

const filter = createReducer('', {
    [filterContacts]: (_, { payload }) => payload,
});
export default combineReducers({ items, filter, });