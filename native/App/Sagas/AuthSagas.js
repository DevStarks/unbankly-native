import { call, put } from 'redux-saga/effects'
import AuthActions from '../Redux/AuthRedux'
import { path } from 'ramda'

export function * signupUser (api, action) {
  const { email, password } = action
  // make the call to the api
  const response = yield call(api.signupUser, email, password)

  if (response.ok) {
    const user = path(['data', 'data'], response)
    yield put(AuthActions.signupSuccess(user))
  } else {
    yield put(AuthActions.signupFailure())
  }
}
