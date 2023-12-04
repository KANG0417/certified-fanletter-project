import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

export const __fetchRegister = createAsyncThunk(
  "authSlice/__fetchRegister",
  async () => {
      const response = await axios.post(
        `${process.env.REACT_APP_BASE_URL}/register`
      );
      return response.data;
    } catch (error) {
      console.log(error);
    }
  }
);

const authSlice = createSlice({
  name: "auth",
  initialState: {
    value: 0,
    status: "weclome",
  },
  extraReducers: (builder) => {
    builder.addCase(__fetchRegister.pending, (state) => {
      state.status = "Loading";
    });
    builder.addCase(__fetchRegister.fulfilled, (state, action) => {
      state.value = action.payload;
      state.status = "complete";
    });
    builder.addCase(__fetchRegister.rejected, (state) => {
      state.status = "fail";
    });
  },
});

export const { addLetter } = authSlice.actions;
export default authSlice.reducer;
