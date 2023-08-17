<template>
  <component :is="tag" :to="to" class="nav-item" :class="{ 'nav-item--danger': danger }" active-class="box nav-item--active">
    <slot />
  </component>
</template>

<script setup lang="ts">
import type { RouteLocationRaw } from 'vue-router'

const props = withDefaults(
  defineProps<{
    to?: RouteLocationRaw,
    tag?: string,
    danger?: boolean
  }>(),
  {
    tag: 'RouterLink',
    danger: false
  }
)
</script>

<style scoped lang="scss">
@import "@/assets/scss/base/settings";

.nav-item {
  position: relative;
  padding: 20px 15px;
  display: flex;
  align-items: center;
  gap: 15px;
  color: $color-secondary;
  font-size: 16px;
  font-weight: 500;
  width: 100%;

  :slotted(svg) {
    width: 15px;
    height: 15px;
  }

  &--active {
    cursor: default;
    color: $color-primary;
    :slotted(svg) { color: $color-accent; }
    &::after {
      content: '';
      position: absolute;
      right: 0;
      top: 50%;
      transform: translateY(-50%);
      width: 2px;
      height: 15px;
      border-radius: 2px;
      background: $color-accent;
    }
  }
  &--danger {
    color: $color-danger;
  }
}
</style>
