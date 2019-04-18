import Actions, { reducer, INITIAL_STATE } from '../../App/Redux/NewLoanRedux'

test('updateNewLoan', () => {
  const attrs = { role: 'borrower' }
  const state = reducer(INITIAL_STATE, Actions.updateNewLoan(attrs))

  expect(state.role).toBeNull('borrower')
})
