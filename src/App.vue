<template>
  <BaseHeader title="Мой профиль">
    <template v-if="user">
      <StatsItem label="Рейтинг">{{ user.rating }}</StatsItem>
      <StatsItem label="Отзывов">{{ user.reviewCount }}</StatsItem>
      <StatsItem label="Сделок">
        <StatsItem label="Продаж" inner>{{ user.tradeCount.sell }}</StatsItem>
        <StatsItem label="Покупок" inner>{{ user.tradeCount.buy }}</StatsItem>
      </StatsItem>
    </template>
  </BaseHeader>
</template>

<script setup lang="ts">
import BaseHeader from '@/components/chunks/BaseHeader.vue'
import StatsItem from '@/components/StatsItem.vue'
import { storeToRefs } from 'pinia'
import { useUserStore } from '@/stores/user'

const { user } = storeToRefs(useUserStore())
</script>

<style lang="scss">
@import "assets/scss/app";
</style>
