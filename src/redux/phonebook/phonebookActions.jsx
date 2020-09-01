import { v4 as uuidv4 } from "uuid";
import { createAction } from "@reduxjs/toolkit";

// const addItem = (name, number) => ({
//   type: ADD_ITEM,
//   payload: {
//     id: uuidv4(),
//     name,
//     number,
//   },
// });

const addItem = createAction("phonebook/add", (name, number) => ({
  payload: {
    id: uuidv4(),
    name,
    number,
  },
}));

// const deleteItem = (id) => ({
//   type: REMOVE_ITEM,
//   payload: {
//     id,
//   },
// });

const deleteItem = createAction("phonebook/remove");

// const filterItem = (filter) => ({
//   type: FILTER_ITEM,
//   payload: {
//     filter,
//   },
// });

const filterItem = createAction("phonebook/filter");

export default { addItem, deleteItem, filterItem };
