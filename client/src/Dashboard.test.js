import React from 'react'
import { shallow } from 'enzyme'
import Dashboard from './Dashboard'

describe('Initial State.', () => {
  it('has an id', () => {
    const component = shallow(<Dashboard />)
    expect(component.state('id')).toBe("")
  })
})

describe('Rendering', () => {
  it('has one text input to join a group', () => {
    const component = shallow(<Dashboard />)
    expect(component.find('input[type="text"]').length).toBe(1)
  })

  it('has two buttons', () => {
    const component = shallow(<Dashboard />)
    expect(component.find('input[type="submit"]').length).toBe(2)
  })

  it('has a button to search', () => {
    const component = shallow(<Dashboard />)
    expect(component.find('input[value="Search"]').length).toBe(1)
  })

  it('has a button to create', () => {
    const component = shallow(<Dashboard />)
    expect(component.find('input[value="Create"]').length).toBe(1)
  })

})
