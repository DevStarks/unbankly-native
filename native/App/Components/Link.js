import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { Text, TouchableOpacity } from 'react-native'
import styles from './Styles/LinkStyles'
import ExamplesRegistry from '../Services/ExamplesRegistry'

// Ignore in coverage report
/* istanbul ignore next */
ExamplesRegistry.addComponentExample('Link', () =>
  <Link onPress={() => window.alert('Your drawers are showing')}>
    This is a link
  </Link>
)

class Link extends Component {
  static propTypes = {
    onPress: PropTypes.func.isRequired,
    children: PropTypes.string.isRequired
  }

  render () {
    return (
      <TouchableOpacity style={[styles.link, this.props.style]} onPress={this.props.onPress}>
        <Text style={styles.link}>{this.props.children}</Text>
      </TouchableOpacity>
    )
  }
}

export default Link
