import { createStackNavigator, createAppContainer } from 'react-navigation'
import LaunchScreen from '../Containers/LaunchScreen'
import AuthScreen from '../Containers/AuthScreen'
import LoanScreen from '../Containers/LoanScreen'
import NewLoanScreen from '../Containers/NewLoanScreen'

import { FluidNavigator } from 'react-navigation-fluid-transitions'

import styles from './Styles/NavigationStyles'

const NewLoanNav = FluidNavigator({
  RoleScreen: { screen: NewLoanScreen }
}, {
  headerMode: 'none',
  initialRouteName: 'RoleScreen'
})

// Manifest of possible screens
const PrimaryNav = createStackNavigator({
  LaunchScreen: { screen: LaunchScreen },
  AuthScreen: { screen: AuthScreen },
  NewLoanScreen: { screen: NewLoanNav },
  LoanScreen: { screen: LoanScreen }
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
