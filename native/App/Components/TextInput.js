import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { TextInput, View } from 'react-native'
import styles from './Styles/TextInputStyles'
import ExamplesRegistry from '../Services/ExamplesRegistry'

// Ignore in coverage report
/* istanbul ignore next */

ExamplesRegistry.addComponentExample('TextInput', () =>
  <AppTextInput>This is text</AppTextInput>
)

class AppTextInput extends Component {
  // For a complete list of props
  // https://facebook.github.io/react-native/docs/textinput.html#props

  static propTypes = {
    onChangeText: PropTypes.func.isRequired
  }

  render () {
    return (
      <View style={[this.props.style, styles.inputWrap]}>
        <TextInput {...this.props} style={styles.textInput}>
          {this.props.children}
        </TextInput>
        <View style={styles.textInputUnderline} />
      </View>
    )
  }
}

export default AppTextInput
