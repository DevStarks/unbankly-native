import React from 'react'
import PropTypes from 'prop-types'
import { Text, TouchableOpacity } from 'react-native'
import styles from './Styles/ButtonStyles'
import ExamplesRegistry from '../Services/ExamplesRegistry'

ExamplesRegistry.addComponentExample('Button', () =>
  <Button
    text='Example button'
    onPress={() => window.alert('Your button was pressed')}
  />
)

const Button = React.memo((props) => {
  console.log(props);
  return (
    <TouchableOpacity
      disabled={props.disabled}
      activeOpacity={props.disabled ? 1 : 0.2}
      style={[props.disabled && styles.disabled, styles.button, props.style]}
      onPress={props.onPress}>

      <Text style={[styles.buttonText, props.textStyle]}>
        {props.text}
      </Text>
    </TouchableOpacity>
  )
})

Button.propTypes = {
  text: PropTypes.string,
  textStyle: PropTypes.object,
  onPress: PropTypes.func,
  disabled: PropTypes.bool
}

export default Button
