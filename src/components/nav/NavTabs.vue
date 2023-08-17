<template>
  <nav class="nav-tabs">
    <NavTab
      v-for="tab in tabs"
      :key="tab.key"
      :active="active === tab.key"
      @click="active = tab.key"
    >{{ tab.label }}</NavTab>
  </nav>
</template>

<script setup lang="ts">
import { computed } from 'vue'
import NavTab from '@/components/nav/NavTab.vue'

export interface Tab {
  label: string,
  key: string | number
}

const props = defineProps<{
  tabs: Tab[],
  active?: Tab['key'] | null
}>()
const emit = defineEmits<{
  'update:active': [Tab['key']]
}>()

const active = computed({
  get: () => props.active,
  set: value => emit('update:active', value)
})
</script>

<style scoped lang="scss">
@import "@/assets/scss/base/settings";

.nav-tabs {
  display: flex;
  align-items: flex-end;
  gap: 60px;
  border-bottom: 1px solid transparentize($color-secondary, .8);
}
</style>
