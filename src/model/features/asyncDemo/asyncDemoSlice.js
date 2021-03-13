/* eslint no-param-reassign:
["error", {"props": true, "ignorePropertyModificationsFor": ["state"]}] */
import { createSlice } from '@reduxjs/toolkit';
import fetchRandomMessage from './fetchSimulator';

export const asyncDemoSlice = createSlice({
  name: 'asyncDemo',
  initialState: {
    idx: null,
    message: null,
  },
  reducers: {
    updateMessage: (state, action) => {
      const { idx, message } = action.payload;
      state.idx = idx;
      state.message = message;
    },
  },
});

export const { updateMessage } = asyncDemoSlice.actions;

export function fetchAsyncMessage(currentIdx) {
  return (dispatch) => {
    dispatch(updateMessage({ idx: null, message: 'loading...' }));
    fetchRandomMessage(currentIdx).then(
      ({ idx, message }) => dispatch(updateMessage({ idx, message })),
    );
  };
}

export default asyncDemoSlice.reducer;
