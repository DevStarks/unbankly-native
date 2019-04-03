import 'react-native'
import React from 'react'
import SmallButton from '../../App/Components/SmallButton'
import renderer from 'react-test-renderer'

test('SmallButton component renders correctly', () => {
  const tree = renderer.create(<SmallButton onPress={() => {}} text='hi' />).toJSON()
  expect(tree).toMatchSnapshot()
})
