import { createSlice } from "@reduxjs/toolkit";

export const memberSlice = createSlice({
  name: "member",
  initialState: "로제",
  reducers: {
    setMember: (state, action) => {
      return action.payload;
    },
  },
});

export const { setMember } = memberSlice.actions;
export default memberSlice.reducer;
