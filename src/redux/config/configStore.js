import { configureStore } from "@reduxjs/toolkit";
import letters from "redux/modules/letters";
import member from "redux/modules/member";

const store = configureStore({
  reducer: {
    letters: letters,
    member: member,
  },
});

export default store;
