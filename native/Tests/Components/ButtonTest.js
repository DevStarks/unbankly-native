import 'react-native'
import React from 'react'
import Button from '../../App/Components/Button'
import { shallow } from 'enzyme'
import renderer from 'react-test-renderer'

test('Button component renders correctly', () => {
  const tree = renderer.create(<Button onPress={() => {}} text='hi' />).toJSON()
  expect(tree).toMatchSnapshot()
})

test('onPress', () => {
  let i = 0 // i guess i could have used sinon here too... less is more i guess
  const onPress = () => i++
  const wrapperPress = shallow(<Button onPress={onPress} text='hi' />)

  expect(wrapperPress.prop('onPress')).toBe(onPress) // uses the right handler
  expect(i).toBe(0)
  wrapperPress.simulate('press')
  expect(i).toBe(1)
})
