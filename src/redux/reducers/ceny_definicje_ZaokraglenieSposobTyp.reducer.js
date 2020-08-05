import { SET_CENY_DEFINICJE_ZAOKRAGLENIESPOSOBTYP } from '../types';

export default (state = [], { type, payload }) => {
  switch (type) {
    case SET_CENY_DEFINICJE_ZAOKRAGLENIESPOSOBTYP:
      return payload;
    default:
      return state;
  }
};
