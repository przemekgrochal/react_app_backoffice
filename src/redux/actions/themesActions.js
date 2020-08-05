import { SET_THEME_DARK, SET_THEME_LIGHT } from '../types';

export const toggleThemeDark = () => ({
  type: SET_THEME_DARK
});

export const toggleThemeLight = () => ({
  type: SET_THEME_LIGHT
});
