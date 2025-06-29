import {configureStore} from "@reduxjs/toolkit";
import applicationReducer from "../JobApplicationPortal/Redux/applicationSlice.jsx"

export const store = configureStore({
  reducer: {
    applications: applicationReducer
  }
}) 