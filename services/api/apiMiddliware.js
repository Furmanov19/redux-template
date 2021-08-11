import { call, put } from 'redux-saga/effects';

export function* apiMiddleware(method, url, data) {
  const response = yield call(method, url, data);
  if (response.error) throw new Error(response.error);
  else return response;
}

export function* apiError({ response, message }, action) {
  let errorMessage = null;
  if (!response) errorMessage = message;
  else if (response.status === 401) errorMessage = 'Incorrect email or password';
  else errorMessage = response.data.error;

  yield put(action(errorMessage));
}
