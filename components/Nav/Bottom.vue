<template>
  <div class="py-2 px-8 sm:py-4 flex bg-red-100n bg-white w-full fixed left-0 bottom-0">
    <div class="flex justify-center w-full">
      <div class="w-full flex"><NuxtLink to=""><Icon name="ph:house-light" size="33" class="nav-icon" /></NuxtLink></div>
      <div class="w-full flex"><NuxtLink to=""><Icon name="ph:house-light" size="33" class="nav-icon" /></NuxtLink></div>
      <div class="w-full flex"><NuxtLink to=""><Icon name="ph:house-light" size="33" class="nav-icon" /></NuxtLink></div>
      <div class="w-full flex"><NuxtLink to=""><Icon name="ph:house-light" size="33" class="nav-icon" /></NuxtLink></div>
      <div class="w-full flex"><NuxtLink to=""><Icon name="ph:house-light" size="33" class="nav-icon" /></NuxtLink></div>
  </div>
  </div>
</template>
<script setup lang="ts">
const route = useRoute()
const routeName = route.name
console.log(routeName)
</script>
<style scoped>
.nav-icon {
  color: #a7a2a2;
}
</style>
