import React from 'react'
import { shallow, mount } from 'enzyme'
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

describe('Input', () => {
  it('should change state when you type a group Id', () => {
    const component = mount(<Dashboard />)
    const groupIdInput = component.find('input[type="text"][name="search"]')
    groupIdInput.get(0).value = "AAA-123-BBB-456"
    groupIdInput.simulate('change', groupIdInput)
    expect(component.state('id')).toBe("AAA-123-BBB-456")
  })
})
