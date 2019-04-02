import { StyleSheet } from 'react-native'
import { ApplicationStyles, Fonts, Metrics } from '../../Themes/'

export default StyleSheet.create({
  mainContainer: {
    ...ApplicationStyles.screen.mainContainer,
    alignItems: 'center'
  },
  title: {
    fontFamily: Fonts.type.secondary,
    fontSize: Fonts.size.regular,
    textAlign: 'center',
    marginBottom: Metrics.baseMargin
    // flex: 1
  },
  logoThumb: {
    ...ApplicationStyles.screen.logoThumb
  },

  squirrel: {

  },
  question: {

    margin: Metrics.baseMargin
  }
})
