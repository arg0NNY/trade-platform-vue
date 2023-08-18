import { mount } from '@vue/test-utils'
import NavTab from '../NavTab.vue'

describe('NavTab', () => {
  it('should apply active class when active prop set to true', () => {
    const wrapper = mount(NavTab, { props: { active: true } })
    expect(wrapper.classes().some(c => c.includes('active'))).toBe(true)
  })

  it('renders slots content', () => {
    const wrapper = mount(NavTab, { slots: { default: 'Some link' } })
    expect(wrapper.text()).toBe('Some link')
  })
})
