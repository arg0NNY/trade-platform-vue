<template>
  <ViewTitle>Сделки</ViewTitle>
  <NavTabs :tabs="[
    { key: 'buy', label: 'Покупки' },
    { key: 'sell', label: 'Продажи' }
  ]" v-model:active="tab" />
  <TradeList v-if="sortedTrades?.length" :trades="sortedTrades" />
  <div v-else class="no-items">Список пуст ...</div>
</template>

<script setup lang="ts">
import ViewTitle from '@/components/ViewTitle.vue'
import NavTabs from '@/components/nav/NavTabs.vue'
import TradeList from '@/components/trade/TradeList.vue'
import { useRouteHash } from '@vueuse/router'
import type { Ref } from 'vue'
import { computed, ref } from 'vue'
import { trades as mockupTradesData } from '@/data/mockupData'

const hash = useRouteHash('#buy') as Ref<string>
const tab = computed({
  get: () => hash.value.slice(1),
  set: value => hash.value = `#${value}`
})

const trades = ref(mockupTradesData)
const sortedTrades = computed(() => trades.value.sort((a, b) => new Date(b.createdAt) - new Date(a.createdAt)))
</script>

<style scoped lang="scss">
@import "@/assets/scss/base/settings";
@import "@/assets/scss/base/mixins/includes";

.no-items {
  font-size: 18px;
  font-weight: 700;
  color: $color-primary;
  margin-top: 40px;

  @include media-breakpoint-down(desktop) {
    font-size: 16px;
    margin-top: 20px;
  }
  @include media-breakpoint-down(md) {
    font-size: 14px;
  }
  @include media-breakpoint-down(sm) {
    font-size: 13px;
  }
}
</style>
