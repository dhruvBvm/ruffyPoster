import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface UiState {
  isNavbarSliderOpen: boolean;
}

const initialState: UiState = {
  isNavbarSliderOpen: false,
};

const uiSlice = createSlice({
  name: "ui",
  initialState,
  reducers: {
    toggleNavbarSlider: (state) => {
      state.isNavbarSliderOpen = !state.isNavbarSliderOpen;
    },
    setNavbarSliderOpen: (state, action: PayloadAction<boolean>) => {
      state.isNavbarSliderOpen = action.payload;
    },
  },
});

export const { toggleNavbarSlider, setNavbarSliderOpen } = uiSlice.actions;
export default uiSlice.reducer;
