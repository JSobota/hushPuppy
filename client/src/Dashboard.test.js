import React from 'react'
import { shallow, mount } from 'enzyme'
import Dashboard from './Dashboard'

describe('Initial State.', () => {
  it('has an id', () => {
    const component = shallow(<Dashboard />)
    expect(component.state('id')).toBe('')
  })
})

describe('Rendering', () => {
  it('has one text input to join a group', () => {
    const component = shallow(<Dashboard />)
    expect(component.find('input[type="text"]').length).toBe(1)
  })

  it('has one form submit button', () => {
    const component = shallow(<Dashboard />)
    expect(component.find('input[type="submit"]').length).toBe(1)
  })

  it('has a button to search', () => {
    const component = shallow(<Dashboard />)
    expect(
      component.find('input[type="submit"]').filter('#searchButton').length
    ).toBe(1)
  })

  it('has a button to create', () => {
    const component = shallow(<Dashboard />)
    expect(component.find('#createButton').length).toBe(1)
  })
})

describe('Input', () => {
  it('should change state when you type a group Id', () => {
    const component = mount(<Dashboard />)
    const groupIdInput = component.find('input[type="text"][name="search"]')
    groupIdInput.get(0).value = 'AAA-123-BBB-456'
    groupIdInput.simulate('change', groupIdInput)
    expect(component.state('id')).toBe('AAA-123-BBB-456')
  })
})

describe('Submit', () => {
  describe('Create button', () => {
    it('fires proper callback', () => {
      const component = mount(<Dashboard />)
      const button = component.find('#createButton')
      component.instance().handleNewButtonClick = jest.fn()
      component.update()
      button.simulate('click')
      expect(component.instance().handleNewButtonClick).toHaveBeenCalledTimes(1)
    })
  })

  describe('Search button', () => {
    it('fires the proper callback', () => {
      const component = mount(<Dashboard />)
      const button = component.find('input[type="submit"] #searchButton')
      component.instance().search = jest.fn()
      component.update()
      button.simulate('click')
      expect(component.instance().search).toHaveBeenCalledTimes(1)
    })
  })
})
