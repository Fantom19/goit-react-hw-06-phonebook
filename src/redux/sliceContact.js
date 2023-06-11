import { createSlice, nanoid } from '@reduxjs/toolkit';

export const sliceContact = createSlice({
  name: 'contacts',
  initialState: [
    { id: nanoid(), name: 'Dan Clements', number: '655-16-79' },
    { id: nanoid(), name: 'Ani Copeland', number: '337-99-26' },
  ],
  reducers: {
    addContact(state, action) {
      state.push({
        id: nanoid(),
        name: action.payload.name,
        number: action.payload.number,
      });
    },

    removeContact(state, action) {
      return state.filter(item => item.id !== action.payload);
    },
  },
});

export const { addContact, removeContact } = sliceContact.actions;
