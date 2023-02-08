<template>
  <div class="py-4 px-6 sm:py-4 fixed w-full flex bg-white z-10">
    <div class="flex w-full place-items-center">
      <div class="w-12 block justify-start" @click="Back()"><Icon name="ph:caret-right-bold" size="30" class="primary-color back-arrow"/></div>
      <div class="w-full flex justify-end">
        <div class="mobile-search-input w-full">
          <input/>
        </div>
        <Icon name="ph:magnifying-glass-light" size="30" class="text-gray"/>
      </div>
    </div>
  </div>
</template>
<script setup lang="ts">
const router = useRouter();
function Back(){router.back()}
</script>
<style scoped>
.back-arrow{
  transform: rotate(180deg);
  margin-left: -4px;
}
.mobile-search-input{
  margin-top: -8px;
  margin-right: -40px
}
</style>
