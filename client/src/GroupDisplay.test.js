import React from 'react'
import { shallow, mount } from 'enzyme'
import GroupDisplay from './GroupDisplay'

describe('Rendering', () => {
  it('should say "No Groups" when given empty group', () => {
    const groups = []
    const component = mount(
      <GroupDisplay groups={groups} />
    )
    expect(component.find('.group-box').html()).toContain('No Groups')
  })

  it('should render the same number of list elements as groups', () => {
    const groups = [
      {id: 1, name: "name", endDate: "12/34/56"},
      {id: 2, name: "name", endDate: "12/34/56"},
      {id: 3, name: "name", endDate: "12/34/56"},
      {id: 4, name: "name", endDate: "12/34/56"},
      {id: 5, name: "name", endDate: "12/34/56"},
    ]
    const component = mount(
      <GroupDisplay groups={groups} />
    )
    expect(component.find('.group-box ul li').length).toBe(5)
  })
})
