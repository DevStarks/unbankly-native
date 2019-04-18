import 'react-native'
import React from 'react'
import Text from '../../App/Components/Text'
import renderer from 'react-test-renderer'

test('Text component renders correctly', () => {
  const tree = renderer.create(<Text>This is text</Text>).toJSON()
  expect(tree).toMatchSnapshot()
})
