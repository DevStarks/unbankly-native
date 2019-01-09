import { StyleSheet } from 'react-native'
import { Metrics, ApplicationStyles } from '../../Themes/'

export default StyleSheet.create({
  ...ApplicationStyles.screen,
  container: {
    paddingBottom: Metrics.baseMargin
  },
  title: {
    marginTop: Metrics.doubleSection,
    height: 10,
    flex: 3,
    flexDirection: 'column',
    alignItems: 'center'
  },
  form: {
    flex: 4
  },
  bottomNav: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between'
  },
  logo: {
    marginTop: Metrics.doubleSection,
    height: Metrics.images.logo,
    width: Metrics.images.logo,
    resizeMode: 'contain'
  },
  centered: {
    alignItems: 'center'
  }
})
