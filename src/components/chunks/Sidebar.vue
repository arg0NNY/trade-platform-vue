<template>
  <aside class="sidebar box">
    <UserInfo v-if="user" :user="user" :compact="reduced">
      <button class="sidebar__btn" :class="{ 'sidebar__btn--active': reduced }" @click="reduced = !reduced" data-test="reduce-btn"><IconChevronUp /></button>
    </UserInfo>
    <NavList v-if="!reduced" class="sidebar__nav" data-test="nav">
      <NavItem :to="{ name: 'home' }"><IconMenu />Сделки</NavItem>
      <NavItem :to="{ name: 'posts' }"><IconPlus />Объявления</NavItem>
      <NavItem :to="{ name: 'reviews' }"><IconComment />Отзывы</NavItem>
      <NavItem :to="{ name: 'edit' }"><IconUser />Редактировать</NavItem>
      <NavItem tag="button" danger><IconLogout />Выйти</NavItem>
    </NavList>
  </aside>
</template>

<script setup lang="ts">
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
import IconChevronUp from '@/components/icons/IconChevronUp.vue'
import { ref } from 'vue'

const { user } = storeToRefs(useUserStore())

const reduced = ref(false)
</script>

<style scoped lang="scss">
@import "@/assets/scss/base/settings";
@import "@/assets/scss/base/mixins/includes";

.sidebar {
  padding: 25px;
  @include media-breakpoint-down(desktop) {
    padding: 20px;
  }
  @include media-breakpoint-only(md) {
    padding: 20px 15px;
  }

  &__nav {
    margin-top: 20px;
    @include media-breakpoint-down(desktop) {
      margin-top: 15px;
    }
    @include media-breakpoint-down(sm) {
      margin-top: 10px;
    }
  }

  &__btn {
    display: none;
    width: 50px;
    height: 50px;
    justify-content: center;
    align-items: center;
    color: $color-secondary;
    margin-left: auto;
    margin-right: -20px;

    &--active svg {
      transform: rotate(180deg);
    }

    @include media-breakpoint-down(sm) {
      display: flex;
    }
  }
}
</style>
