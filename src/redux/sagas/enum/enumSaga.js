import { takeLatest, call, put } from 'redux-saga/effects';
import {
  FETCH_ENUMS,
  SET_USTAWIENIA_JEZYKTYP,
  SET_UZYTKOWNICY_ROLA,
  SET_CENY_DEFINICJE_ZAOKRAGLENIESPOSOBTYP
} from '../../types';
import Api from '../../../api/enums';

function* fetchEnums() {
  const response = yield call(Api.getEnums);

  if (response.status === 200) {
    const responseJSON = yield call([response, 'json']);
    
    const langs = [];
    const roles = [];
    const zaokraglenie = [];

    responseJSON.map(({ enumName, nameSpace, id, value, name }) => {
      const item = { nameSpace, id, value, name };

      if (enumName === 'JezykTyp') {
        langs.push(item)
      } else if (enumName === 'Rola') {
        roles.push(item);
      } else if (enumName === 'ZaokraglenieSposobTyp') {
        zaokraglenie.push(item);
      }
      return null;
    });
    
    yield put({ type: SET_USTAWIENIA_JEZYKTYP, payload: langs });
    yield put({ type: SET_UZYTKOWNICY_ROLA, payload: roles });
    yield put({
      type: SET_CENY_DEFINICJE_ZAOKRAGLENIESPOSOBTYP,
      payload: zaokraglenie
    });
  } else {
    throw new Error();
  }
}

export default function* watchEnums() {
  yield takeLatest(FETCH_ENUMS, fetchEnums);
}
