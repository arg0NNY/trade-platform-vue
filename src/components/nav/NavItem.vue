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
@import "@/assets/scss/base/mixins/includes";

.nav-item {
  position: relative;
  padding: 20px 15px;
  display: flex;
  align-items: center;
  gap: 15px;
  color: $color-secondary;
  transition: .2s color;
  font-size: 16px;
  font-weight: 500;
  width: 100%;
  @include media-breakpoint-down(desktop) {
    padding: 15px;
    font-size: 14px;
    border-radius: 15px;
  }
  @include media-breakpoint-down(md) {
    padding: 15px 10px;
    gap: 10px;
  }

  :slotted(svg) {
    width: 15px;
    height: 15px;
    flex-shrink: 0;
    color: $color-secondary;
    transition: .2s color;
  }

  &:hover, &--active {
    color: $color-primary;
    :slotted(svg) { color: $color-accent; }
  }
  &--active {
    cursor: default;
    &::after {
      content: '';
      position: absolute;
      right: -1px;
      top: 50%;
      transform: translateY(-50%);
      width: 2px;
      height: 15px;
      border-radius: 2px;
      background: $color-accent;
    }
  }
  &--danger {
    &, :deep(*) { color: $color-danger !important; }
  }
}
</style>
