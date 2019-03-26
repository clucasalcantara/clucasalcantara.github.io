import React from 'react'
import { shallow } from 'enzyme'
import Logo from '..'

describe('Logo component', () => {
  it('should renders without crash', () => {
    const wrapper = shallow(<Logo content="Work with coffee" />)

    expect(wrapper).toMatchSnapshot()
  })
})
