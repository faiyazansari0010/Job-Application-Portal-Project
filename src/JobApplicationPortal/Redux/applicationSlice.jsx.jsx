import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  applicationsList: []
}

const applicationSlice = createSlice({
  name: "applications",
  initialState,
  reducers: {
    addApplication: (state, action) => {
      for (let i = 0; i < state.applicationsList.length; i++) {
        if (state.applicationsList[i].jobID === action.payload.jobID) {
          const updatedApplication = { ...state.applicationsList[i], ...action.payload };
          state.applicationsList[i] = updatedApplication;
          return;
        }
      }
      state.applicationsList.push(action.payload);
    },

    deleteApplication: (state, action) => {
      for (let i = 0; i < state.applicationsList.length; i++) {
        if (state.applicationsList[i].jobID === action.payload) {
          state.applicationsList = state.applicationsList.filter((item) => item.jobID !== action.payload)
        }
      }
    }
  }
});

export default applicationSlice.reducer;
export const { addApplication, deleteApplication } = applicationSlice.actions;