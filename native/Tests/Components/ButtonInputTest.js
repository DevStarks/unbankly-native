// import 'react-native'
import React from 'react'
import { TouchableOpacity } from 'react-native'
import ButtonInput from '../../App/Components/ButtonInput'
import { shallow } from 'enzyme'
import renderer from 'react-test-renderer'

test('ButtonInput component renders correctly', () => {
  const tree = renderer.create(
    <ButtonInput
      onSelect={() => {}}
      options={[{id: 1, name: 'Option 1'}, {id: 2, name: 'Option 2'}]}
    />
  ).toJSON()
  expect(tree).toMatchSnapshot()
})

test('it renders TouchableOpacity components', () => {
  const wrapper = shallow(
    <ButtonInput
      onSelect={() => {}}
      options={[{id: 1, name: 'Option 1'}]}
    />)

  expect(wrapper.find(TouchableOpacity)).toHaveLength(1)
})

test('onSelect', () => {
  let i = null
  const onSelect = id => { i = id }
  const wrapperPress = shallow(
    <ButtonInput
      onSelect={onSelect}
      options={[{id: 1, name: 'Option 1'}, {id: 2, name: 'Option 2'}]}
    />)

  expect(i).toBe(null)
  wrapperPress.find(TouchableOpacity).first().simulate('press')
  expect(i).toBe(1)
})
