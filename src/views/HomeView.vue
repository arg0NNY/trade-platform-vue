<template>
  <ViewTitle>Сделки</ViewTitle>
  <NavTabs :tabs="[
    { key: 'buy', label: 'Покупки' },
    { key: 'sell', label: 'Продажи' }
  ]" v-model:active="tab" />
  <TradeList :trades="sortedTrades" />
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
