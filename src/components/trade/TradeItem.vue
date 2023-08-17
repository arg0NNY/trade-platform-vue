<template>
  <tr class="trade-item" :class="{ 'trade-item--declined': trade.status === TradeStatus.Declined }">
    <td># {{ trade.id }}</td>
    <td>{{ dayjs(trade.createdAt).format('DD.MM.YYYY H:mm') }}</td>
    <td class="trade-item__type">Золото</td>
    <td class="trade-item__name"><span><IconGold />{{ trade.name }}</span></td>
    <td>{{ trade.seller.username }}</td>
    <td><Status :type="tradeStatusNormalized[trade.status]">{{ tradeStatusName[trade.status] }}</Status></td>
    <td class="trade-item__price">{{ trade.price.amount }} <span>{{ trade.price.currency }}</span></td>
  </tr>
</template>

<script setup lang="ts">
import type { Trade } from '@/types'
import { TradeStatus } from '@/types'
import { tradeStatusName, tradeStatusNormalized } from '@/data/trade'
import dayjs from 'dayjs'
import IconGold from '@/components/icons/IconGold.vue'
import Status from '@/components/Status.vue'

const props = defineProps<{
  trade: Trade
}>()
</script>

<style scoped lang="scss">
@import "@/assets/scss/base/settings";
@import "@/assets/scss/components/box";

.trade-item {
  position: relative;
  isolation: isolate;
  &::after {
    content: '';
    position: absolute;
    inset: 0;
    @include box;
    z-index: -1;
  }

  td {
    padding: 20px 20px 23px;
    font-size: 14px;
    font-weight: 500;
    vertical-align: middle;
  }

  &:not(&--declined) :is(&__type, &__name) {
    color: $color-accent;
  }
  &__name {
    span {
      display: flex;
      align-items: center;
      gap: 10px;
      font-size: 12px;
      font-weight: 600;
      letter-spacing: 1.2px;
      text-transform: uppercase;
    }
  }
  &__price {
    font-weight: 600;
    span {
      font-size: 12px;
      font-weight: 500;
      color: $color-secondary;
    }
  }

  &--declined {
    color: $color-secondary;
  }
}
</style>
