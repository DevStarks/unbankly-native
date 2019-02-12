import { createStackNavigator, createAppContainer } from 'react-navigation'
import LaunchScreen from '../Containers/LaunchScreen'
import AuthScreen from '../Containers/AuthScreen'
// import LoanScreen from '../Containers/LoanScreen'

import styles from './Styles/NavigationStyles'

// Manifest of possible screens
const PrimaryNav = createStackNavigator({
  LaunchScreen: { screen: LaunchScreen },
  AuthScreen: { screen: AuthScreen }
  // LoanScreen: { screen: LoanScreen }
}, {
  // Default config for all screens
  headerMode: 'none',
  initialRouteName: 'AuthScreen',
  // initialRouteName: 'LaunchScreen',
  navigationOptions: {
    headerStyle: styles.header
  }
})

export default createAppContainer(PrimaryNav)
