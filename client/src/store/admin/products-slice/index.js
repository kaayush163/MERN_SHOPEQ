import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  isLoading: false,
  productList: [],
};

const AdminProductsSlice = createSlice({
  name: "adminProducts",
  initialState,
  reducers: {},
  extraReducers: (builder) => {},
});
