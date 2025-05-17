import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  step: 1,
  formData: {
    name: "",
    email: "",
    city: "",
    state: "",
  },
};

const formSlice = createSlice({
  name: "form",
  initialState,
  reducers: {
    saveFormData: (state, action) => {
      state.formData = { ...state.formData, ...action.payload };
    },
    nextStep: (state) => {
      state.step += 1;
    },
    prevStep: (state) => {
      state.step -= 1;
    },
    resetForm: () => initialState,
  },
});

export const { saveFormData, nextStep, prevStep, resetForm } =
  formSlice.actions;
export default formSlice.reducer;
