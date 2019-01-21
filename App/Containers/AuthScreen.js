import React, { Component } from 'react'
import { TextInput, Text, Image, View } from 'react-native'
import Button from '../Components/Button'
import { Images } from '../Themes'

// Styles
import styles from './Styles/AuthScreenStyles'

export default class AuthScreen extends Component {
  constructor (props) {
    super(props)
    this.state = {
      username: 'username',
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
            style={{height: 40, borderColor: 'gray', borderWidth: 1}}
            onChangeText={(text) => this.setState({text})}
            value={this.state.username}
          />
          <TextInput
            style={{height: 40, borderColor: 'gray', borderWidth: 1}}
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
