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

.stats-item {
  &.box {
    padding: 17px 20px;
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
  }
  &__value {
    font-size: 18px;
    font-weight: 600;
    color: $color-primary;
  }
}
</style>
