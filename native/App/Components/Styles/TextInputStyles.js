import { StyleSheet } from 'react-native'
import { Colors, Fonts, Metrics } from '../../Themes/'

export default StyleSheet.create({
  textInput: {
    height: Metrics.inputHeight,
    color: Colors.textPrimary,
    fontFamily: Fonts.type.secondary,
    fontSize: Fonts.size.input,
    paddingLeft: Metrics.smallMargin,
    paddingTop: Metrics.baseMargin,
    paddingBottom: Metrics.baseMargin,
    borderColor: Colors.border,
    borderWidth: 1
  },
  textInputUnderline: {
    backgroundColor: Colors.secondary,
    height: 1,
    bottom: 4,
    left: 1,
    width: 291
  },
  inputWrap: {
    height: Metrics.inputHeight
  }
})
