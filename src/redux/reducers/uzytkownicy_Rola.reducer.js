import { SET_UZYTKOWNICY_ROLA } from '../types';

export default (state = [], { type, payload }) => {
  switch (type) {
    case SET_UZYTKOWNICY_ROLA:
      return payload;
    default:
      return state;
  }
};
