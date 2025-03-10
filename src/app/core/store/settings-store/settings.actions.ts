import { createAction, props } from '@ngrx/store';

export const SET_THEME_START: string = '[Shared state] set theme start';
export const SET_THEME_SUCCESS: string = '[Shared state] set theme success';

export const themeStart = createAction(
  SET_THEME_START,
  props<{ theme: string }>()
);

export const themeSuccess = createAction(
  SET_THEME_SUCCESS,
  props<{ theme: string }>()
);
