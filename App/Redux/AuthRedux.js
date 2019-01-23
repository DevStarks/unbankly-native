import { createReducer, createActions } from 'reduxsauce'
import Immutable from 'seamless-immutable'

/* ------------- Types and Action Creators ------------- */

const { Types, Creators } = createActions({
  signupRequest: ['email', 'password'],
  signupSuccess: ['user'],
  signupFailure: null
})

export const AuthTypes = Types
export default Creators

/* ------------- Initial State ------------- */

export const INITIAL_STATE = Immutable({
  user: null,
  email: null,
  fetching: null,
  error: null
})

/* ------------- Selectors ------------- */

// export const AuthSelectors = {
//   selectAvatar: state => state.github.user
// }

/* ------------- Reducers ------------- */

// request the user
export const request = (state, { email }) =>
  state.merge({ fetching: true, email, user: null })

// successful user lookup
export const success = (state, action) => {
  const { user } = action
  return state.merge({ fetching: false, error: null, user })
}

// failed to get the user
export const failure = (state) =>
  state.merge({ fetching: false, error: true, user: null })

/* ------------- Hookup Reducers To Types ------------- */

export const reducer = createReducer(INITIAL_STATE, {
  [Types.SIGNUP_REQUEST]: request,
  [Types.SIGNUP_SUCCESS]: success,
  [Types.SIGNUP_FAILURE]: failure
})
