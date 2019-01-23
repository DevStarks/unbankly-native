import React, { Component } from 'react'
import { Image, View } from 'react-native'
import Button from '../Components/Button'
import Text from '../Components/AppText'
import TextInput from '../Components/TextInput'
import { Images } from '../Themes'

// Styles
import styles from './Styles/AuthScreenStyles'

export default class AuthScreen extends Component {
  constructor (props) {
    super(props)
    this.state = {
      email: 'email',
      password: 'password'
    }
  }

  render () {
    return (
      <View style={styles.mainContainer}>
        <View style={styles.title}>
          <Image
            style={{width: 200, height: 55}}
            source={Images.logo}
          />
          <Text style={styles.subtitle}>Helping People.</Text>
        </View>

        <View style={[styles.section, styles.form]}>
          <TextInput
            onChangeText={(text) => this.setState({text})}
            value={this.state.email}
          />
          <TextInput
            onChangeText={(text) => this.setState({text})}
            value={this.state.password}
          />
          <Button text='SIGN UP' />
        </View>

        <View style={[styles.section, styles.bottomNav]}>

          <Text>Helping People.</Text>
          <Text>Helping People.</Text>

        </View>
      </View>
    )
  }
}
