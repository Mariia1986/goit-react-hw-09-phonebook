import { createSelector } from "reselect";

export const getContacts = (state) => {
  return state.contacts.items;
};
export const filterContact = (state) => {
  return state.contacts.filter;
};

export const filteredContacts = createSelector(
  [getContacts, filterContact],
  (items, filter) =>
    items.filter(({ name }) =>
      name.toLowerCase().includes(filter.toLocaleLowerCase())
    )
);

export const getLoading = (state) => state.contacts.loader;
