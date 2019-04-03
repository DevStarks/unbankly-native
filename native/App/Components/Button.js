import React, { Component } from 'react'
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

class Button extends Component {
  static propTypes = {
    text: PropTypes.string,
    textStyle: PropTypes.obj,
    onPress: PropTypes.func
  }

  render () {
    return (
      <TouchableOpacity
        style={[styles.button, this.props.style]}
        onPress={this.props.onPress}>

        <Text style={[styles.buttonText, this.props.textStyle]}>
          {this.props.text}
        </Text>
      </TouchableOpacity>
    )
  }
}

export default Button
