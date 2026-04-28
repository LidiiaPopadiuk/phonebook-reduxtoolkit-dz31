import { createSlice } from "@reduxjs/toolkit";
import { nanoid } from "nanoid";

const contactsSlice = createSlice({
  name: "contacts",
  initialState: [],

  reducers: {
    addContact: {
      reducer(state, action) {
        state.push(action.payload);
      },

      prepare(name, number) {
        return {
          payload: {
            id: nanoid(),
            name,
            number,
          },
        };
      },
    },

    removeContact: {
      reducer(state, action) {
        return state.filter((contact) => contact.id !== action.payload);
      },

      prepare(id) {
        return {
          payload: id,
        };
      },
    },
  },
});

export const { addContact, removeContact } = contactsSlice.actions;
export const contactsReducer = contactsSlice.reducer;
