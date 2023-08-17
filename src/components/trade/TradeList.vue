<template>
  <table class="trade-list">
    <thead>
      <tr>
        <th>#</th>
        <th>Дата</th>
        <th>Тип</th>
        <th>Наименование</th>
        <th>Продавец</th>
        <th>Статус</th>
        <th>Цена</th>
      </tr>
    </thead>
    <tbody>
      <TradeItem
        v-for="trade in trades"
        :key="trade.id"
        :trade="trade"
      />
    </tbody>
  </table>
</template>

<script setup lang="ts">
import TradeItem from '@/components/trade/TradeItem.vue'
import type { Trade } from '@/types'

const props = defineProps<{
  trades: Trade[]
}>()
</script>

<style scoped lang="scss">
@import "@/assets/scss/base/settings";
@import "@/assets/scss/base/mixins/includes";

.trade-list {
  width: 100%;
  border-collapse: separate;
  border-spacing: 0 10px;
  margin-top: 20px;

  thead {
    @include media-breakpoint-down(desktop) {
      display: none;
    }
  }
  th {
    text-align: start;
    padding: 10px 20px;
    font-size: 14px;
    font-weight: 500;
    color: $color-secondary;
  }

  tbody {
    @include media-breakpoint-down(desktop) {
      display: grid;
      gap: 10px;
    }
  }
}
</style>
