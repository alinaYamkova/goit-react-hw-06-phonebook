import { createReducer } from '@reduxjs/toolkit';
import { combineReducers } from 'redux'
import actions from './contacts-action';

const items = createReducer([], {
    [actions.addContact]: (state, { payload }) => [...state, payload],
    [actions.deleteContact]: (state, { payload }) => state.filter(({ id }) => id !== payload),
});

const filter = createReducer('', {
    [actions.filterContacts]: (_, { payload }) => payload,
});

export default combineReducers({ items, filter, });
