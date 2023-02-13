<template>
  <div>
    <div class="">
      <NavUser />
    </div>
    <div class="own-container min-h-screen page-background">
      <NuxtLink to="/panel/ustawienia">
      <div class="mb-12 flex">
        <Icon name="ph:caret-right-bold" size="21" class="primary-color back-arrow" />
        <p class="go primary-color">Wróć</p>
      </div>
    </NuxtLink>
      <slot />
    </div>
    <div class="sm:hidden">
      <NavBottom />
    </div>
  </div>
</template>

<script setup lang="ts"></script>

<style scoped>
.own-container {
  margin-left: 30px;
  margin-right: 30px;
  padding-top: 95px;
}
.go {
  font-weight: 600;
  font-size: 16px;
  line-height: 22px;
  margin-left: 4px;
}
.back-arrow {
  transform: rotate(180deg);
  margin-left: -4px;
}
</style>
