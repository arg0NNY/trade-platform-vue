<template>
  <button class="nav-tab" :class="{ 'nav-tab--active': active }"><slot /></button>
</template>

<script setup lang="ts">
const props = defineProps<{
  active?: boolean
}>()
</script>

<style scoped lang="scss">
@import "@/assets/scss/base/settings";
@import "@/assets/scss/base/mixins/includes";

.nav-tab {
  font-size: 16px;
  font-weight: 500;
  color: $color-secondary;
  transition: .2s color;
  padding: 20px 0;
  position: relative;
  @include media-breakpoint-down(desktop) {
    font-size: 14px;
  }
  @include media-breakpoint-down(md) {
    font-size: 12px;
    padding: 15px 0;
  }
  &:hover {
    color: $color-primary;
  }

  &--active {
    color: $color-primary;
    cursor: default;
    &::after {
      content: '';
      position: absolute;
      bottom: -1px;
      left: 0;
      width: 100%;
      height: 2px;
      border-radius: 2px;
      background: $color-accent;
    }
  }
}
</style>
