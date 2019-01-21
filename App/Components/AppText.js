import React, { Component } from 'react'
import { Text } from 'react-native'
import styles from './Styles/AppTextStyles'
import ExamplesRegistry from '../Services/ExamplesRegistry'

// Ignore in coverage report
/* istanbul ignore next */
ExamplesRegistry.addComponentExample('AppText', () =>
  <AppText>This is text</AppText>
)

class AppText extends Component {
  render () {
    return (
      <Text {...this.props} style={[styles.text, this.props.style]}>
        {this.props.children}
      </Text>
    )
  }
}

export default AppText
