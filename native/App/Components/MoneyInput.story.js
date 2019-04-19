import React from 'react'
import { View } from 'react-native'
import { storiesOf } from '@storybook/react-native'

import MoneyInput from './MoneyInput'

storiesOf('MoneyInput')
  .add('Default', () => (
    <View style={{ backgroundColor: 'black' }}>
      <MoneyInput
        placeholder='$1,000,000'
        onChangeText={() => {}}
      />
    </View>
  ))
