<template>
  <div class="pb-32">
    <div class="">
      <NavUser />
    </div>
    <div class="own-container min-h-screen page-background">
      <div class="mb-10 flex justify-end" @click="Back">
        <Icon name="ph:caret-right-bold" size="22" class="primary-color back-arrow" />
        <p class="go primary-color">Powrót</p>
      </div><div class="mt-10">

      <slot />
    </div>
    </div>
    <div class="sm:hidden">
      <NavBottom />
    </div>
  </div>
</template>

<script setup lang="ts">
function Back(){useRouter().back()}
</script>

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
