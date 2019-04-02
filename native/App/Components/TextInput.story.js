import React from 'react'
import { View } from 'react-native'
import { storiesOf } from '@storybook/react-native'

import TextInput from './TextInput'

storiesOf('TextInput')
  .add('Default', () => (
    <View style={{ backgroundColor: 'black' }}>
      <TextInput
        text='TextInput'
        onChangeText={() => {}}
      />
    </View>
  ))
