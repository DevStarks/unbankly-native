import React, { Component } from 'react'
import { Image, View } from 'react-native'
import { connect } from 'react-redux'
import Button from '../Components/Button'
import Text from '../Components/AppText'
import TextInput from '../Components/TextInput'
import Link from '../Components/Link'
import { Images } from '../Themes'
import AuthActions from '../Redux/AuthRedux'

// Styles
import styles from './Styles/AuthScreenStyles'

class AuthScreen extends Component {
  constructor (props) {
    super(props)
    this.state = {
      action: 'SIGN UP',
      email: '',
      password: ''
    }

    this.navigateToMainIfSignedIn()
  }

  componentDidUpdate () {
    this.navigateToMainIfSignedIn()
  }

  navigateToMainIfSignedIn () {
    if (this.props.user) {
      this.props.navigation.replace('LoanScreen')
    }
  }

  setAction (action) {
    return () => this.setState({action})
  }

  oppositeActionText () {
    return this.state.action === 'SIGN IN' ? 'SIGN UP' : 'SIGN IN'
  }

  authAction (...args) {
    return this.state.action === 'SIGN UP'
      ? this.props.signupRequest(...args)
      : () => {}
  }

  invokeAction () {
    this.authAction(this.state.email, this.state.password)
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
            secureTextEntry
          />
          <Button
            style={styles.button}
            text={this.state.action}
            onPress={this.invokeAction.bind(this)}
          />
          <View style={styles.authLinks}>
            <Link onPress={this.setAction(this.oppositeActionText())}>
              {this.oppositeActionText()}
            </Link>
            <Link onPress={() => {}}>FORGOT YOUR PASSWORD?</Link>
          </View>
        </View>
      </View>
    )
  }
}

const mapStateToProps = state => {
  return {
    user: state.auth.user
  }
}

export default connect(mapStateToProps, { signupRequest: AuthActions.signupRequest })(AuthScreen)
