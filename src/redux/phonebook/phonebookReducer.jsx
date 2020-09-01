import { createReducer } from "@reduxjs/toolkit";
import phonebookActions from "./phonebookActions";

const contacts = {
  items: [],
  filter: "",
};

const addItem = (state, action) => {
  return { ...state, items: [...state.items, action.payload] };
};
const deleteItem = (state, action) => {
  return {
    ...state,
    items: state.items.filter((item) => item.id !== action.payload),
  };
};

const filterItem = (state, action) => {
  return {
    ...state,
    filter: action.payload,
  };
};
const phonebookReducer = createReducer(contacts, {
  [phonebookActions.addItem]: addItem,
  [phonebookActions.deleteItem]: deleteItem,
  [phonebookActions.filterItem]: filterItem,
});

// function phonebookReducer(state = contacts, action) {
//   switch (action.type) {
//     case phonebookActions.addItem.type:
//       return { ...state, items: [...state.items, action.payload] };

//     case phonebookActions.deleteItem.type:
//       return {
//         ...state,
//         items: state.items.filter((item) => item.id !== action.payload),
//       };

//     case phonebookActions.filterItem.type:
//       return {
//         ...state,
//         filter: action.payload,
//       };

//     default:
//       return state;
//   }
// }

export default phonebookReducer;
