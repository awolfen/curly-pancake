import { createSlice } from "@reduxjs/toolkit";

interface UIState {
  mobileMenuOpen: boolean;
}

const initialState: UIState = {
  mobileMenuOpen: false,
};

const uiSlice = createSlice({
  name: "ui",
  initialState,
  reducers: {
    toggleMobileMenu: (state) => {
      state.mobileMenuOpen = !state.mobileMenuOpen;
    },
    closeMobileMenu: (state) => {
      state.mobileMenuOpen = false;
    },
  },
});

export const { toggleMobileMenu, closeMobileMenu } = uiSlice.actions;
export default uiSlice.reducer;
