<template>
  <div class="status" :class="`status--${type}`">
    <div class="status__icon"></div>
    <div class="status__text"><slot /></div>
  </div>
</template>

<script setup lang="ts">
export type StatusType = 'success' | 'warning' | 'pending' | 'danger'

const props = defineProps<{
  type: StatusType
}>()
</script>

<style scoped lang="scss">
@import "@/assets/scss/base/settings";

.status {
  display: flex;
  align-items: center;
  gap: 10px;
  font-size: 14px;
  font-weight: 500;

  &--success {
    color: $color-success;
  }
  &--warning {
    color: $color-warning;
  }
  &--pending {
    color: $color-pending;
  }
  &--danger {
    color: $color-danger;
  }

  &__icon {
    flex-shrink: 0;
    width: 5px;
    height: 5px;
    border-radius: 50%;
    background: currentColor;
    box-shadow: 0 0 5px currentColor;
  }
}
</style>
