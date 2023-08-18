import { mount } from '@vue/test-utils'
import NavItem from '../NavItem.vue'
import { expect } from 'vitest'

describe('NavItem', () => {
  it('should apply given tag name when given', () => {
    const wrapper = mount(NavItem, { props: { tag: 'p' } })
    expect(wrapper.find('p').exists()).toBe(true)
  })

  it('should apply danger class when danger prop set to true', () => {
    const wrapper = mount(NavItem, { props: { danger: true } })
    expect(wrapper.classes().some(c => c.includes('danger'))).toBe(true)
  })

  it('renders slots content', () => {
    const wrapper = mount(NavItem, { slots: { default: 'Some link' } })
    expect(wrapper.text()).toBe('Some link')
  })
})
