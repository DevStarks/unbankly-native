import FixtureAPI from '../../App/Services/FixtureApi'
import { put, call } from 'redux-saga/effects'
import { signupUser } from '../../App/Sagas/AuthSagas'
import AuthActions from '../../App/Redux/AuthRedux'
import { path } from 'ramda'

const stepper = (fn) => (mock) => fn.next(mock).value

describe('#signupUser', () => {
  const email = 'test@test.com'
  const password = 'password'
  const user = {email, password}

  test('first calls API', () => {
    const step = stepper(signupUser(FixtureAPI, user))
    // first yield is API
    expect(step()).toEqual(call(FixtureAPI.signupUser, email, password))
  })

  test('success path', () => {
    const response = FixtureAPI.signupUser(email, password)
    const step = stepper(signupUser(FixtureAPI, user))
    // first step API
    step()
    // Second step successful return
    const stepResponse = step(response)
    // Get the user from the response
    const userResponse = path(['data'], response)[0]
    expect(stepResponse).toEqual(put(AuthActions.signupSuccess(userResponse)))
  })

  test('failure path', () => {
    const response = {ok: false}
    const step = stepper(signupUser(FixtureAPI, user))
    // first step API
    step()
    // Second step failed response
    expect(step(response)).toEqual(put(AuthActions.signupFailure()))
  })
})
