import {
  GET_CONTACTS,
  ADD_CONTACTS,
  DELETE_CONTACTS
} from "../../actions/types";

const initialState = {
  contacts: []
};

export default function(state = initialState, action) {
  switch (action.type) {
    case GET_CONTACTS:
      return {
        ...state,
        contacts: action.payload
      };
    case ADD_CONTACTS:
      return {
        ...state,
        contacts: [action.payload, ...state.contacts]
      };
    case DELETE_CONTACTS:
      return {
        contacts: state.contacts.filter(res => res.id !== action.payload)
      };
    default:
      return state;
      break;
  }
}
