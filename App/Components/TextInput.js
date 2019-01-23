import React, { Component } from 'react'
import { TextInput, View } from 'react-native'
import styles from './Styles/TextInputStyles'
import ExamplesRegistry from '../Services/ExamplesRegistry'

// Ignore in coverage report
/* istanbul ignore next */

ExamplesRegistry.addComponentExample('TextInput', () =>
  <AppTextInput>This is text</AppTextInput>
)

class AppTextInput extends Component {
  render () {
    return (
      <View>
        <TextInput {...this.props} style={[styles.textInput, this.props.style]}>
          {this.props.children}
        </TextInput>
        <View style={styles.textInputUnderline} />
      </View>
    )
  }
}

export default AppTextInput
