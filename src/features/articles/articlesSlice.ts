import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { Article } from '../../types/Article';
import { getArticles } from './articlesAPI';

type ArticlesState = {
  articles: Article[];
  loading: boolean;
  error: string;
};

const initialState: ArticlesState = {
  articles: [],
  loading: false,
  error: '',
};

const articlesSlice = createSlice({
  name: 'articles',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(init.pending, (state) => {
      state.loading = true;
    });

    builder.addCase(init.fulfilled, (state, action) => {
      state.articles = action.payload;
      state.loading = false;
    });

    builder.addCase(init.rejected, (state) => {
      state.error = 'Can not load articles';
      state.loading = false;
    });
  },
});

export const init = createAsyncThunk('articles/fetch', () => {
  return getArticles();
});

export const { reducer } = articlesSlice;
