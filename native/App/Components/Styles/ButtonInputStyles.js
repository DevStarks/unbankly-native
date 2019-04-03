import { StyleSheet } from 'react-native'
import { Colors, Fonts, Metrics } from '../../Themes/'

export default StyleSheet.create({
  ButtonInput: {
    flexDirection: 'row',
    justifyContent: 'center'
  },
  button: {
    backgroundColor: Colors.tertiary,
    paddingVertical: Metrics.baseMargin,
    paddingHorizontal: Metrics.doubleBaseMargin,
    marginHorizontal: 1,
    flex: 1,
    borderWidth: Metrics.borderWidth,
    borderColor: Colors.tertiary
  },
  text: {
    color: Colors.textPrimary,
    fontSize: Fonts.size.regular,
    fontFamily: Fonts.type.bold,
    textTransform: 'capitalize',
    textAlign: 'center'
  },
  selected: {
    borderColor: Colors.darkBorder
  }
})
