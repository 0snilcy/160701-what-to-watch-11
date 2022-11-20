import { createReducer } from '@reduxjs/toolkit';
import { AuthStatus } from 'src/const';
import { TFilm } from 'src/types/films';
import {
  changeCurrentGenre,
  loadFilms,
  requireAuthorization,
  setAllFilms,
  setCurrentFilm,
  setFilmsLoadingStatus,
} from './action';

type TInitialState = {
  films: TFilm[];
  currentFilm: null | TFilm;
  authorizationStatus: AuthStatus;
  isFilmsLoading: boolean;
};
const initialState: TInitialState = {
  films: [],
  currentFilm: null,
  authorizationStatus: AuthStatus.Unknown,
  isFilmsLoading: false,
};

const reducer = createReducer(initialState, (builder) => {
  builder.addCase(changeCurrentGenre, (_, action) => {
    window.location.hash = `#${action.payload}`;
  });
  builder.addCase(setAllFilms, (state, action) => {
    state.films = action.payload;
  });
  builder.addCase(setCurrentFilm, (state, action) => {
    state.currentFilm = action.payload;
  });
  builder.addCase(loadFilms, (state, action) => {
    state.films = action.payload;
  });
  builder.addCase(requireAuthorization, (state, action) => {
    state.authorizationStatus = action.payload;
  });
  builder.addCase(setFilmsLoadingStatus, (state, action) => {
    state.isFilmsLoading = action.payload;
  });
});

export { reducer };
