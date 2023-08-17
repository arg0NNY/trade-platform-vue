<template>
  <aside class="sidebar box">
    <UserInfo :user="user" />
    <NavList class="sidebar__nav">
      <NavItem :to="{ name: 'home' }"><IconMenu />Сделки</NavItem>
      <NavItem :to="{ name: 'posts' }"><IconPlus />Объявления</NavItem>
      <NavItem :to="{ name: 'reviews' }"><IconComment />Отзывы</NavItem>
      <NavItem :to="{ name: 'edit' }"><IconUser />Редактировать</NavItem>
      <NavItem tag="button" danger><IconLogout />Выйти</NavItem>
    </NavList>
  </aside>
</template>

<script setup>
import { storeToRefs } from 'pinia'
import { useUserStore } from '@/stores/user'
import UserInfo from '@/components/user/UserInfo.vue'
import NavList from '@/components/nav/NavList.vue'
import NavItem from '@/components/nav/NavItem.vue'
import IconMenu from '@/components/icons/IconMenu.vue'
import IconPlus from '@/components/icons/IconPlus.vue'
import IconComment from '@/components/icons/IconComment.vue'
import IconUser from '@/components/icons/IconUser.vue'
import IconLogout from '@/components/icons/IconLogout.vue'

const { user } = storeToRefs(useUserStore())
</script>

<style scoped lang="scss">
@import "@/assets/scss/base/settings";
@import "@/assets/scss/base/mixins/includes";

.sidebar {
  padding: 25px;
  @include media-breakpoint-down(desktop) {
    padding: 20px;
  }

  &__nav {
    margin-top: 20px;
    @include media-breakpoint-down(desktop) {
      margin-top: 15px;
    }
  }
}
</style>
