import { THROW_GLOBAL_ERROR } from '../types';

export default (state = false, { type }) => {
  switch (type) {
    case THROW_GLOBAL_ERROR:
      return true;
    default:
      return state;
  }
};
