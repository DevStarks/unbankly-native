import { createReducer, createActions } from 'reduxsauce'
import Immutable from 'seamless-immutable'

/* ------------- Types and Action Creators ------------- */

const { Types, Creators } = createActions({
  updateNewLoan: ['attrs']
})

export const NewLoanTypes = Types
export default Creators

/* ------------- Initial State ------------- */

export const INITIAL_STATE = Immutable({
  role: null
})

/* ------------- Selectors ------------- */

// export const NewLoanSelectors = {
//   selectAvatar: state => state.github.user
// }

/* ------------- Reducers ------------- */
export const updateNewLoan = (state, { attrs }) =>
  state.merge(attrs)

/* ------------- Hookup Reducers To Types ------------- */

export const reducer = createReducer(INITIAL_STATE, {
  [Types.UPDATE_NEW_LOAN]: updateNewLoan
})
