import { StyleSheet } from 'react-native'
import { Colors, Fonts, Metrics } from '../../Themes/'

export default StyleSheet.create({
  button: {
    backgroundColor: Colors.primary,
    paddingVertical: Metrics.baseMargin
  },

  buttonText: {
    color: Colors.textPrimary,
    textAlign: 'center',
    fontSize: Fonts.size.regular,
    fontFamily: Fonts.type.bold
  }
})
