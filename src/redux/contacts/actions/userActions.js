// import { v4 as uuidv4 } from "uuid";
import { createAction } from "@reduxjs/toolkit";

// ===========Redux===============
// const addContact=(contactObj)=>{
//     return{
//         type:add,
//         payload:{
//             id:  uuidv4(),
//             name:contactObj.name,
//             number:contactObj.number,
//         }
//     }
// }

// const deleteContact=(id)=>{
//     return{
//         type:deleteUsers,
//         payload:id
//     }
// }

// const filterContacts=(value)=>{
//     return{
//         type:filter,
//         payload:value,
//     }

// }
// ===========Redux Toolkit===============
//  const addContact = createAction("ADD_CONTACT", ({ id, name, number }) => {
//   return {
//     payload: {
//       id: uuidv4(),
//       name: name,
//       number: number,
//     },
//   };
// });

// const deleteContact = createAction("DELETE_CONTACT");
// const filterContacts = createAction("FILTER_CONTACTS");

// export default { addContact, deleteContact, filterContacts };

export const fetchContactsRequest = createAction(
  "contacts/fetchContactsRequest"
);
export const fetchContactsSuccess = createAction(
  "contacts/fetchContactsSuccess"
);
export const fetchContactsError = createAction("contacts/fetchContactsError");

export const addContactsRequest = createAction("contacts/addContactsRequest");
export const addContactsSuccess = createAction("contacts/addContactsSuccess");
export const addContactsError = createAction("contacts/addContactsError");

export const deleteContactsRequest = createAction(
  "contacts/deleteContactsRequest"
);
export const deleteContactsSuccess = createAction(
  "contacts/deleteContactsSuccess"
);
export const deleteContactsError = createAction("contacts/deleteContactsError");

export const filterContacts = createAction("contacts/filter");


export const editContactsRequest = createAction("contacts/editContactsRequest");
export const editContactsSuccess = createAction("contacts/editContactsSuccess");
export const editContactsError = createAction("contacts/editContactsError");
