import { mount } from '@vue/test-utils'
import Sidebar from '../Sidebar.vue'
import { createTestingPinia } from '@pinia/testing'

describe('Sidebar', () => {
  it('should hide navigation when reduce button is clicked', async () => {
    const navSelector = '[data-test="nav"]'

    const wrapper = mount(Sidebar, {
      global: {
        plugins: [createTestingPinia()],
      },
    })
    expect(wrapper.find(navSelector).exists()).toBe(true)
    await wrapper.get('[data-test="reduce-btn"]').trigger('click')
    expect(wrapper.find(navSelector).exists()).toBe(false)
  })
})
