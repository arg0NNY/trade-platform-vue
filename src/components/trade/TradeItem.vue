<template>
  <tr class="trade-item" :class="{ 'trade-item--declined': trade.status === TradeStatus.Declined }">
    <td># {{ trade.id }}</td>
    <td>{{ dayjs(trade.createdAt).format('DD.MM.YYYY H:mm') }}</td>
    <td class="trade-item__type">Золото</td>
    <td class="trade-item__name"><span><IconGold />{{ trade.name }}</span></td>
    <td class="trade-item__separator"></td>
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
@import "@/assets/scss/base/mixins/includes";
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

  @include media-breakpoint-down(desktop) {
    display: grid;
    grid-template-columns: repeat(4, auto);
    padding: 5px;
  }

  td {
    padding: 20px 20px 23px;
    font-size: 14px;
    font-weight: 500;
    vertical-align: middle;

    @include media-breakpoint-down(desktop) {
      padding: 10px;

      &::before {
        content: '#';
        display: block;
        font-size: 12px;
        font-weight: 500;
        color: $color-secondary;
        margin-bottom: 10px;

        @include media-breakpoint-down(md) {
          margin-bottom: 5px;
        }
      }
      &:nth-child(1)::before { opacity: 0; }
      &:nth-child(2)::before { content: 'Дата'; }
      &:nth-child(3)::before { content: 'Тип'; }
      &:nth-child(4)::before { content: 'Наименование'; }
      &:nth-child(6)::before { content: 'Продавец'; }
      &:nth-child(7)::before { content: 'Статус'; }
      &:nth-child(8)::before { content: 'Цена'; }
    }
    @include media-breakpoint-down(md) {
      font-size: 12px;
    }
    @include media-breakpoint-down(sm) {
      &:nth-child(4)::before { content: 'Наимен.'; }
    }
  }

  &__separator {
    margin: 0 10px;
    display: none;
    grid-column: span 4;
    height: 1px;
    background: $color-secondary;
    opacity: .2;
    border-radius: 1px;
    padding: 0 !important;
    &::before { content: none !important; }
    @include media-breakpoint-down(desktop) {
      display: block;
    }
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

      @include media-breakpoint-down(md) {
        font-size: 10px;
        letter-spacing: 1px;
      }
    }
  }
  &__price {
    font-weight: 600;
    span {
      font-size: 12px;
      font-weight: 500;
      color: $color-secondary;

      @include media-breakpoint-down(md) {
        font-size: 10px;
      }
    }
  }

  &--declined {
    color: $color-secondary;
  }
}
</style>
