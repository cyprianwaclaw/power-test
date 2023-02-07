<template>
  <div>
    <div v-if="route.name=='index'">
      <NavGuest />
    </div>
    <div v-else>
        <NavUser />
      </div>
    <div class="own-container">
        {{ route.name }}
      <slot />
    </div>
  </div>
</template>

<script setup lang="ts">
const route = useRoute()


</script>

<style scoped>
.own-container {
}
</style>
