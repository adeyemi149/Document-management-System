import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit";
import axios from "axios";
import { boolean } from "yup";
import { addFileType } from "../models/types";
import { getFileType } from "../models/types";

const initialState: addFileType = {
  files: [],
  loader: false,
};

export const docsSlice = createSlice({
  name: "docs",
  initialState,
  reducers: {
    addFiles: (state, action: PayloadAction<Array<getFileType>>) => {
      state.files = action.payload;
    },
    setLoader: (state, action: PayloadAction<boolean>) => {
      state.loader = action.payload;
    },
  },
});

export default docsSlice.reducer;
export const { addFiles, setLoader } = docsSlice.actions;
