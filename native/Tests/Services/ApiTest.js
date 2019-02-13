import API from '../../App/Services/Api'
import AuthActions from '../../App/Redux/AuthRedux'

import { store } from '../../App/Containers/App'

store.dispatch = jest.fn()

test('dispatches RECEIVE_TOKEN_HEADERS on api response', () => {
  const headers = { a: 1, b: 2 }
  const response = { headers }
  API().addMonitor(response)

  const action = AuthActions.receiveTokenHeaders(headers)
  expect(store.dispatch).toHaveBeenCalledWith(action)
})

test('adds headers to requests', () => {
})
