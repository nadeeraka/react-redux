import { GET_CONTACTS, ADD_CONTACTS, DELETE_CONTACTS } from "./types";
import axios from "axios";
export const getContacts = () => async dispatch => {
  const res = await axios.get("https://jsonplaceholder.typicode.com/users");
  dispatch({
    type: GET_CONTACTS,
    payload: res.data
  });
};
export const addContacts = contact => {
  return {
    type: ADD_CONTACTS,
    payload: contact
  };
};
export const deleteContacts = id => {
  return {
    type: DELETE_CONTACTS,
    payload: id
  };
};
