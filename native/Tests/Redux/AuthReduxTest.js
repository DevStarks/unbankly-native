import Actions, { reducer, INITIAL_STATE } from '../../App/Redux/AuthRedux'

test('signupRequest', () => {
  const email = 'test@gmail.com'
  const password = 'password'
  const state = reducer(INITIAL_STATE, Actions.signupRequest(email, password))

  expect(state.fetching).toBe(true)
  expect(state.email).toEqual(email)
  expect(state.user).toBeNull()
})

test('signupSuccess', () => {
  const user = {email: 'test@gmail.com'}
  const state = reducer(INITIAL_STATE, Actions.signupSuccess(user))

  expect(state.fetching).toBe(false)
  expect(state.user).toEqual(user)
  expect(state.error).toBeNull()
})

test('signupFailure', () => {
  const state = reducer(INITIAL_STATE, Actions.signupFailure())

  expect(state.fetching).toBe(false)
  expect(state.error).toBe(true)
  expect(state.user).toBeNull()
})
