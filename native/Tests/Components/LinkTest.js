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
  let i = 0 // i guess i could have used sinon here too... less is more i guess
  const onPress = () => i++
  const wrapperPress = shallow(<Link onPress={onPress}>Link</Link>)

  expect(wrapperPress.prop('onPress')).toBe(onPress) // uses the right handler
  expect(i).toBe(0)
  wrapperPress.simulate('press')
  expect(i).toBe(1)
})
