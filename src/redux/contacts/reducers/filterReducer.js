import {createReducer} from "@reduxjs/toolkit"
import { filterContacts}from "../actions/userActions"

// ===========Redux===============
// const { filter } = types;

// const filterReducer = (state = "", action) => {
//   const { type, payload } = action;
//   switch (type) {
//     case filter:
//       return payload;
//     default:
//       return state;
//   }
// }


// ===========Redux Toolkit===============

const filterReducer=createReducer('',{
  [filterContacts]:((_,{payload})=> payload)
})

export default filterReducer