import { StyleSheet } from 'react-native'
import { Colors, Fonts, Metrics } from '../../Themes/'

export default StyleSheet.create({
  button: {
    backgroundColor: Colors.colorPrimary
  },

  buttonText: {
    marginVertical: Metrics.baseMargin,
    color: Colors.colorTextPrimary,
    textAlign: 'center',
    fontSize: Fonts.size.regular
  }
})
