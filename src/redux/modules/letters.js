import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import moment from "moment/moment";

const initialState = {
  fanletter: [],
};

export const __addLetterThunk = createAsyncThunk(
  "Add_LETTER",
  async (arg, thunkAPI) => {
    try {
      axios.patch("", arg);
      return thunkAPI.fulfillWithValue(arg);
    } catch (error) {
      console.log(error);
      return thunkAPI.rejectWithValue(error);
    }
  }
);

const lettersSlice = createSlice({
  name: "letters",
  initialState,
  // extraReducers: {
  //   [__addLetterThunk.fulfilled]: (state, action) => {
  //     state.fanletter.push(action.payload);
  //   },
  //   deleteLetter: (state, action) => {
  //     state = state.fanletter.filter((letter) => letter.id !== action.payload);
  //   },
  //   editLetter: (state, action) => {
  //     state.fanletter = state.fanletter.map((letter) => {
  //       if (letter.id === action.payload.id) {
  //         return {
  //           ...letter,
  //           content: letter.content,
  //           editDate: moment().format("YY-MM-DD hh:mm:ss"),
  //         };
  //       }
  //       return letter;
  //     });
  //   },
  // },
});

export const { addLetter } = lettersSlice.actions;
export default lettersSlice.reducer;
