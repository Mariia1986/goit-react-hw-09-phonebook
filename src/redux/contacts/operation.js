import axios from "axios";
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
} from "./actions/userActions.js";

const fetchContacts = () => async (dispatch) => {
  dispatch(fetchContactsRequest());

  try {
    const { data } = await axios.get("/contacts");
    dispatch(fetchContactsSuccess(data));
  } catch (error) {
    dispatch(fetchContactsError(error.message));
  }
};

const addContacts = (contact) => async (dispatch) => {
  dispatch(addContactsRequest());

  try {
    const { data } = await axios.post("/contacts", contact);
    dispatch(addContactsSuccess(data));
  } catch (error) {
    dispatch(addContactsError(error.message));
  }
};

const deleteContacts = (contactId) => async (dispatch) => {
  dispatch(deleteContactsRequest());

  try {
    await axios.delete(`/contacts/${contactId}`);
    dispatch(deleteContactsSuccess(contactId));
  } catch (error) {
    dispatch(deleteContactsError(error.message));
  }
};

const editContacts = (value) => async (dispatch) => {
  dispatch(editContactsRequest());
  const { id } = value;
  delete value.id;
  try {
    const { data } = await axios.patch(`/contacts/${id}`, value);
    dispatch(editContactsSuccess(data));
  } catch (error) {
    dispatch(editContactsError(error.message));
  }
};

export default {
  fetchContacts,
  addContacts,
  deleteContacts,
  editContacts,
};
