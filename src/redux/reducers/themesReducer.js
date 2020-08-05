import { SET_THEME_DARK, SET_THEME_LIGHT } from '../types';

const INITIAL_STATE = {
  darkTheme: false,
  lightTheme: false
};

export default (state = INITIAL_STATE, { type }) => {
  switch (type) {
    case SET_THEME_LIGHT:
      return {
        ...state,
        darkTheme: false,
        lightTheme: true
      };
    case SET_THEME_DARK:
      return {
        ...state,
        darkTheme: true,
        lightTheme: false
      };
    default:
      return state;
  }
};
