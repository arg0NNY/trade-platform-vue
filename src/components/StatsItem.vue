<template>
  <div class="stats-item" :class="{ box: !inner }">
    <span class="stats-item__label">{{ label }}:</span>
    <span class="stats-item__value"><slot /></span>
  </div>
</template>

<script setup lang="ts">
const props = withDefaults(
  defineProps<{
    label: string,
    inner?: boolean
  }>(),
  {
    inner: false
  }
)
</script>

<style scoped lang="scss">
@import "@/assets/scss/base/settings";
@import "@/assets/scss/base/mixins/includes";

.stats-item {
  &.box {
    padding: 17px 20px;

    @include media-breakpoint-down(desktop) {
      padding: 12px 20px;
      border-radius: 15px;
    }
    @include media-breakpoint-down(md) {
      padding: 9px 15px;
      border-radius: 10px;
    }
  }
  &, &__value {
    display: flex;
    align-items: center;
    gap: 10px;
  }
  &__label {
    font-size: 16px;
    font-weight: 500;
    color: $color-secondary;

    @include media-breakpoint-down(desktop) {
      font-size: 14px;
    }
    @include media-breakpoint-down(md) {
      font-size: 12px;
    }
  }
  &__value {
    font-size: 18px;
    font-weight: 600;
    color: $color-primary;

    @include media-breakpoint-down(desktop) {
      font-size: 16px;
    }
    @include media-breakpoint-down(md) {
      font-size: 14px;
    }
    @include media-breakpoint-down(sm) {
      font-size: 13px;
    }
  }
}
</style>
