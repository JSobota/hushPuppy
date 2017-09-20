import React from 'react'
import { shallow, mount } from 'enzyme'
import CreateForm from './CreateForm'
import helper from './test-helpers'

describe('Initial State.', () => {
  it('has an empty group name', () => {
    const component = shallow(<CreateForm />)
    expect(component.state('groupName')).toBe("")
  })

  it('has an empty ending date', () => {
    const component = shallow(<CreateForm />)
    expect(component.state('endDate')).toBe("")
  })
})

describe('Rendering', () => {
  it('has two text inputs', () => {
    const component = shallow(<CreateForm />)
    expect(component.find('input[type="text"]').length).toBe(2)
  })

  it('has one submit input', () => {
    const component = shallow(<CreateForm />)
    expect(component.find('input[type="submit"]').length).toBe(1)
  })
})

describe('Input', () => {
  it('typing group name updates state', () => {
    const component = mount(<CreateForm />)
    const groupNameInput = component.find('input[name="groupName"]')
    helper.typeIn(groupNameInput, 'Group Name')
    expect(component.state('groupName')).toBe('Group Name')
  })

  it('typing an end date updates state', () => {
    const component = mount(<CreateForm />)
    const endDateInput = component.find('input[name="endDate"]')
    helper.typeIn(endDateInput, '01/22/17')
    expect(component.state('endDate')).toBe('01/22/17')
  })

  it('fires right callback when clicked', () => {
    const component = mount(<CreateForm />)
    const button = component.find('input[type="submit"]')
    component.instance().createEvent = jest.fn()
    component.update()
    button.simulate('click')
    expect(component.instance().createEvent).toHaveBeenCalledTimes(1)
  })
})
