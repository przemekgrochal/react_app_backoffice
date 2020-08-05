import { combineReducers } from 'redux';
import ustawienia_JezykTypReducer from './ustawienia_JezykTyp.reducer';
import uzytkownicy_RolaReducer from './uzytkownicy_Rola.reducer';
import ceny_definicje_ZaokraglenieSposobTypReducer from './ceny_definicje_ZaokraglenieSposobTyp.reducer';
import globalErrorReducer from './globalErrorReducer';
import themesReducer from './themesReducer';

export default combineReducers({
  ustawienia_JezykTyp: ustawienia_JezykTypReducer,
  uzytkownicy_Rola: uzytkownicy_RolaReducer,
  ceny_definicje_ZaokraglenieSposobTyp: ceny_definicje_ZaokraglenieSposobTypReducer,
  globalError: globalErrorReducer,
  themes: themesReducer
});
