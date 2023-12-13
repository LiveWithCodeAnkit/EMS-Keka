import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import ProfileService from "../services/ProfileService";

interface UserProfile {
  firstName: string;
  middleName: string;
  lastName: string;
  displayName: string;
  gender: string;
  dob: string;
  maritalStatus: string;
  bloodGroup: string;
  physicalStatus: string;
  isLoading: boolean;
}

const initialState: UserProfile = {
  firstName: "",
  middleName: "",
  lastName: "",
  displayName: "",
  gender: "",
  dob: "",
  maritalStatus: "",
  bloodGroup: "",
  physicalStatus: "",
  isLoading: false,
};

export const createProfile = createAsyncThunk(
  "user/createProfile",
  async (profileData: Partial<UserProfile> & { isLoading?: boolean }, { rejectWithValue }) => {
    try {
      const res = await ProfileService.create(profileData as UserProfile);
      return res.data;
    } catch (error) {
      return rejectWithValue(error);
    }
  }
);


const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(createProfile.pending, (state, action) => {
      return { ...state, isLoading: true };
    });
    builder.addCase(createProfile.fulfilled, (state, action) => {
      return { ...state, ...action.payload, isLoading: false };
    });
    builder.addCase(createProfile.rejected, (state, action) => {
      return { ...state, isLoading: false };
    });
  },
});

export default userSlice.reducer;
