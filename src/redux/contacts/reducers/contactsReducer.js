// import types from "../actions/actionsTypes";
import { createReducer } from "@reduxjs/toolkit";
import {
  fetchContactsRequest,
  fetchContactsSuccess,
  fetchContactsError,
  addContactsRequest,
  addContactsSuccess,
  addContactsError,
  deleteContactsRequest,
  deleteContactsSuccess,
  deleteContactsError,
  editContactsRequest,
  editContactsSuccess,
  editContactsError,
} from "../actions/userActions.js";

// ===========Redux===============
// const { add, deleteUsers } = types;

// const contacts = [
//   { id: "id-1", name: "Rosie Simpson", number: "459-12-56" },
//   { id: "id-2", name: "Hermione Kline", number: "443-89-12" },
//   { id: "id-3", name: "Eden Clements", number: "645-17-79" },
//   { id: "id-4", name: "Annie Copeland", number: "227-91-26" },
// ];

// const contactsReducer = (state = contacts, action) => {
//   const { type, payload } = action;
//   switch (type) {
//     case add:
//       return [...state, payload];
//     case deleteUsers:
//       return state.filter((el) => el.id !== payload);
//       default:
//         return state
//   }
// };

// ===========Redux Toolkit===============
// const state = [
//   { id: "id-1", name: "Rosie Simpson", number: "459-12-56" },
//   { id: "id-2", name: "Hermione Kline", number: "443-89-12" },
//   { id: "id-3", name: "Eden Clements", number: "645-17-79" },
//   { id: "id-4", name: "Annie Copeland", number: "227-91-26" },
// ];

const contactsReducer = createReducer([], {
  [fetchContactsSuccess]: (_, { payload }) => payload,
  [addContactsSuccess]: (state, { payload }) => [...state, payload],
  [deleteContactsSuccess]: (state, { payload }) => {
    return state.filter((el) => el.id !== payload);
  },
  [editContactsSuccess]: (state, { payload }) =>
    state.map((el) => (el.id === payload.id ? payload : el)),
});

const loader = createReducer(false, {
  [fetchContactsRequest]: () => true,
  [fetchContactsSuccess]: () => false,
  [fetchContactsError]: () => false,
  [addContactsRequest]: () => true,
  [addContactsSuccess]: () => false,
  [addContactsError]: () => false,
  [deleteContactsRequest]: () => true,
  [editContactsRequest]: () => true,
  [editContactsSuccess]: () => false,
  [editContactsError]: () => false,
  [deleteContactsSuccess]: () => false,
  [deleteContactsError]: () => false,

});

export default { contactsReducer, loader };
