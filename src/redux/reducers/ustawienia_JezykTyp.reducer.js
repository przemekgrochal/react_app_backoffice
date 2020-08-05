import { SET_USTAWIENIA_JEZYKTYP } from '../types';

export default (state = [], { type, payload }) => {
  switch (type) {
    case SET_USTAWIENIA_JEZYKTYP:
      return payload;
    default:
      return state;
  }
};
