import 'react-native'
import React from 'react'
import Link from '../../App/Components/Link'
import { shallow } from 'enzyme'
import renderer from 'react-test-renderer'

test('Link component renders correctly', () => {
  const tree = renderer.create(<Link onPress={() => {}}>This is a link</Link>).toJSON()
  expect(tree).toMatchSnapshot()
})

test('onPress', () => {
  let i = 0
  const onPress = () => i++
  const wrapper = shallow(<Link onPress={onPress}>Link</Link>)

  expect(i).toBe(0)
  wrapper.simulate('press')
  expect(i).toBe(1)
})
