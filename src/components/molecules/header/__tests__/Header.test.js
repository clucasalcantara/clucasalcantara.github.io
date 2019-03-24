import React from 'react'
import { shallow } from 'enzyme'
import Header from '..'

describe('Header component', () => {
  it('should renders without crash', () => {
    const wrapper = shallow(
      <Header
        navItems={[{ text: 'Work with coffee', path: '/' }]}
        title="Title"
        subtitle="Subtitle"
        theme={{ colors: {} }}
      />
    )

    expect(wrapper).toMatchSnapshot()
  })
})
