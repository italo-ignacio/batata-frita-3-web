import { createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';

interface CommentFilter {
  comment: '';
  date: null;
  syndicate: null;
  user: null;
}

export interface FilterSliceState {
  commentFilter: CommentFilter;
}

const initialState: FilterSliceState = {
  commentFilter: {
    comment: '',
    date: null,
    syndicate: null,
    user: null
  }
};

const filterSlice = createSlice({
  initialState,
  name: 'filter',
  reducers: {
    resetCommentFilter(state: FilterSliceState) {
      state.commentFilter = initialState.commentFilter;
    },
    setCommentFilter(state: FilterSliceState, action: PayloadAction<Partial<CommentFilter>>) {
      state.commentFilter = {
        comment:
          action.payload.comment === undefined
            ? state.commentFilter.comment
            : action.payload.comment,
        date: action.payload.date === undefined ? state.commentFilter.date : action.payload.date,
        syndicate:
          action.payload.syndicate === undefined
            ? state.commentFilter.syndicate
            : action.payload.syndicate,
        user: action.payload.user === undefined ? state.commentFilter.user : action.payload.user
      };
    }
  }
});

export const {
  reducer: filterReducer,
  actions: { resetCommentFilter, setCommentFilter }
} = filterSlice;
