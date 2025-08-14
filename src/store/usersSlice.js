import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { searchUsersApi, getUserDetailsApi } from '../services/githubService';

export const searchUsers = createAsyncThunk(
  'users/searchUsers',
  async (query, { rejectWithValue }) => {
    try {
      if (!query || query.trim().length === 0) return { items: [] };
      const data = await searchUsersApi(query.trim());
      return data;
    } catch (err) {
      return rejectWithValue(err.message || 'Search failed');
    }
  }
);

export const fetchUserDetails = createAsyncThunk(
  'users/fetchUserDetails',
  async (login, { rejectWithValue }) => {
    try {
      const data = await getUserDetailsApi(login);
      return data;
    } catch (err) {
      return rejectWithValue(err.message || 'Failed to load user');
    }
  }
);

const usersSlice = createSlice({
  name: 'users',
  initialState: {
    query: '',
    loading: false,
    error: null,
    list: [],
    selected: null,
    isModalVisible: false,
  },
  reducers: {
    setQuery(state, action) {
      state.query = action.payload;
    },
    clearSelected(state) {
      state.selected = null;
      state.isModalVisible = false;
    },
    openModal(state) {
      state.isModalVisible = true;
    },
    closeModal(state) {
      state.isModalVisible = false;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(searchUsers.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(searchUsers.fulfilled, (state, action) => {
        state.loading = false;
        state.list = action.payload.items || [];
      })
      .addCase(searchUsers.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload || 'Error searching users';
      })
      .addCase(fetchUserDetails.fulfilled, (state, action) => {
        state.selected = action.payload;
        state.isModalVisible = true;
      });
  },
});

export const { setQuery, clearSelected, openModal, closeModal } = usersSlice.actions;
export default usersSlice.reducer;