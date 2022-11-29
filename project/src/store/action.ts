import { createAction } from '@reduxjs/toolkit';
import { AuthStatus } from 'src/const';
import { TFilm } from 'src/types/films';
import { UserData } from 'src/types/user-data';

const changeCurrentGenre = createAction('films/currentGenre', (value: string) => ({
  payload: value,
}));

const setAllFilms = createAction('films/getAll', (value: TFilm[]) => ({
  payload: value,
}));

const loadFilms = createAction<TFilm[]>('data/loadFilms');

const requireAuthorization = createAction<AuthStatus>('user/requireAuthorization');

const setFilmsLoadingStatus = createAction<boolean>('data/setFilmsLoadingStatus');

const setError = createAction<string | null>('app/setEror');

const setUser = createAction('user/setUser', (value: UserData) => ({
  payload: value,
}));

export {
  changeCurrentGenre,
  setAllFilms,
  loadFilms,
  requireAuthorization,
  setFilmsLoadingStatus,
  setError,
  setUser,
};
