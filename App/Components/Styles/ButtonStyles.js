import { StyleSheet } from 'react-native'
import { Colors, Fonts, Metrics } from '../../Themes/'

export default StyleSheet.create({
  button: {
    backgroundColor: Colors.primary
  },

  buttonText: {
    marginVertical: Metrics.baseMargin,
    color: Colors.textPrimary,
    textAlign: 'center',
    fontSize: Fonts.size.regular
  }
})
