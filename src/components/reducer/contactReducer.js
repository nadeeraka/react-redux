import {
  GET_CONTACTS,
  ADD_CONTACTS,
  DELETE_CONTACTS
} from "../../actions/types";

const initialState = {
  contacts: [
    {
      id: 1,
      name: "John Doe",
      email: "john@gmail.com",
      phone: "555-555-5555"
    },
    {
      id: 2,
      name: "Karen Williams",
      email: "karen@gmail.com",
      phone: "444-444-4444"
    },
    {
      id: 3,
      name: "Henry Johnson",
      email: "henry@gmail.com",
      phone: "333-333-333"
    }
  ]
};

export default function(state = initialState, action) {
  switch (action.type) {
    case GET_CONTACTS:
      return {
        ...state
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
