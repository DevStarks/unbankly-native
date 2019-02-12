// redux-token-auth-config.js
import { generateAuthActions } from 'redux-token-auth'
import Config from 'react-native-config'

const config = {
  authUrl: Config.AUTH_URL,
  userAttributes: {
    // firstName: 'first_name',
    // imageUrl: 'image'
  },
  userRegistrationAttributes: {
    // firstName: 'first_name',
  }
}

const {
  registerUser,
  signInUser,
  signOutUser,
  verifyCredentials
} = generateAuthActions(config)

export {
  registerUser,
  signInUser,
  signOutUser,
  verifyCredentials
}
