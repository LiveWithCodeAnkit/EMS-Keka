import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import ProfileContactService, {
  UserProfileContactProps,
} from "./../services/ProfileContactService";

const initialState: UserProfileContactProps = {
  personalEmail: "",
  linkedinUrl: "",
  mobilePhone: "",
  residencePhone: "",
  skypeNumber: "",
  workEmail: "",
  workPhone: "",
};

export const createProfileContact = createAsyncThunk(
  "userContact/createContact",
  async (contactData: UserProfileContactProps) => {
    const res = await ProfileContactService.create(contactData);
    return res.data;
  }
);

const userContactSlice = createSlice({
  name: "userContact",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(createProfileContact.fulfilled, (state, action) => {
      return { ...state, ...action.payload };
    });
  },
});

export default userContactSlice.reducer;
