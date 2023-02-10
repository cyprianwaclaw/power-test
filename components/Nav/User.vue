<template>
  <div class="nav-border py-4 px-6 sm:py-4 fixed w-full flex bg-white z-10">
    <div class="flex w-full justify-between">
    <NuxtLink to="/panel"><img src="@/assets/file/logo.png" class="size-logo" /></NuxtLink>
<NuxtLink to="/panel/szukaj"><Icon name="ph:magnifying-glass-light" size="30" class="search-icon"/></NuxtLink>
    </div>
  </div>
</template>
<script setup lang="ts"></script>
<style scoped>
@media only screen and (max-width: 520px) {
  .size-logo {
    width: 175px;
  }
}

@media only screen and (min-width: 520px) {
  .size-logo {
    width: 175px;
  }
}
.search-icon{
  color: #C4C4C4;
}
</style>
