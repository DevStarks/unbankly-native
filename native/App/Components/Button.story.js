import React from 'react'
import { View } from 'react-native'
import { storiesOf } from '@storybook/react-native'

import Button from './Button'

storiesOf('Button', module)
  .add('Default', () => (
    <View style={{ backgroundColor: 'black' }}>
      <Button
        text='Drawer Button'
        onPress={() => { }}
      />
    </View>
  ))
