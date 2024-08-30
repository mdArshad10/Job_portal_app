import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  singleCompany: null,
  companies: [],
  searchCompanyByText: "",
};

export const companySlice = createSlice({
  name: "company",
  initialState,
  reducers: {
    setSingleCompany: (state, action) => {
      state.singleCompany = action.payload;
    },
    setCompanies: (state, action) => {
      state.companies = action.payload;
    },
    setSearchCompanyByText: (state, action) => {
      state.searchCompanyByText = String(action.payload);
    },
  },
});

// Action creators are generated for each case reducer function
export const { setSingleCompany, setCompanies, setSearchCompanyByText } =
  companySlice.actions;

export default companySlice.reducer;
