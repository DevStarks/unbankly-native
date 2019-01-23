import { StyleSheet } from 'react-native'
import { Metrics, Fonts, ApplicationStyles } from '../../Themes/'

export default StyleSheet.create({
  ...ApplicationStyles.screen,
  container: {
    paddingBottom: Metrics.baseMargin
  },
  title: {
    marginTop: Metrics.doubleSection,
    height: 10,
    flex: 1,
    flexDirection: 'column',
    alignItems: 'center'
  },
  subtitle: {
    ...Fonts.style.h3
  },
  form: {
    flex: 3
  },
  authLinks: {
    paddingTop: Metrics.baseMargin,
    flexDirection: 'row',
    justifyContent: 'space-between'
  },
  logo: {
    width: 200,
    height: 55
  },
  centered: {
    alignItems: 'center'
  },
  emailInput: {
    marginBottom: Metrics.baseMargin
  },
  button: {
    marginTop: Metrics.baseMargin
  }
})
