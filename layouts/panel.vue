<template>
  <div>
    <div class="">
      <NavUser />
    </div>
    <div class="own-container">
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
  margin-left: 12px;
  margin-right: 12px;
}
</style>
