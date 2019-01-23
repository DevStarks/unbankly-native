import React, { Component } from 'react'
import { Image, View } from 'react-native'
import Button from '../Components/Button'
import Text from '../Components/AppText'
import TextInput from '../Components/TextInput'
import Link from '../Components/Link'
import { Images } from '../Themes'

// Styles
import styles from './Styles/AuthScreenStyles'

export default class AuthScreen extends Component {
  constructor (props) {
    super(props)
    this.state = {
      action: 'SIGN IN',
      email: '',
      password: ''
    }
  }

  setAction (action) {
    return () => this.setState({action})
  }

  oppositeAction () {
    return this.state.action === 'SIGN IN' ? 'SIGN UP' : 'SIGN IN'
  }

  render () {
    return (
      <View style={styles.mainContainer}>
        <View style={styles.title}>
          <Image
            style={styles.logo}
            source={Images.logo}
          />
          <Text style={styles.subtitle}>Helping People.</Text>
        </View>

        <View style={[styles.section, styles.form]}>
          <TextInput
            style={styles.emailInput}
            onChangeText={(text) => this.setState({email: text})}
            value={this.state.email}
            placeholder='email'
          />
          <TextInput
            onChangeText={(text) => this.setState({password: text})}
            value={this.state.password}
            placeholder='password'
          />
          <Button
            style={styles.button}
            text={this.state.action} />
          <View style={styles.authLinks}>
            <Link onPress={this.setAction(this.oppositeAction())}>
              {this.oppositeAction()}
            </Link>
            <Link>FORGOT YOUR PASSWORD?</Link>
          </View>
        </View>
      </View>
    )
  }
}
