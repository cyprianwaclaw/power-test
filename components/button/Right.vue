<template>
  <div>
    <NuxtLink to="/">
      <button class="button">
        <div class="w-full flex flex-row">
          <p class="text-button w-full">{{ name }}</p>
          <Icon name="carbon:chevron-right" class="ml-1" size="25" />
        </div>
      </button>
    </NuxtLink>
  </div>
</template>

<script setup lang="ts">
defineProps({
  name: { type: String },
  link: { type: String },
});
</script>

<style scoped lang="scss">
@import "@/assets/style/variables";

.button {
  box-shadow: inset 0 0 0 1 $primary-hover;
  background-color: $primary;
  padding: 10px 23px;
  color: $white;
  display: block;
  border-radius: 8px;
  transition: color 0.3s ease-in-out, box-shadow 0.3s ease-in-out;
}

.button:hover {
  box-shadow: inset 300px 0 0 0 $primary-hover;
}
@media only screen and (max-width: 520px) {
  .text-button {
    font-family: $family;
    font-style: normal;
    font-weight: 500;
    font-size: 16px;
    line-height: 22px;
    /* identical to box height, or 138% */
    display: flex;
    align-items: center;
    text-align: center;
    letter-spacing: 0.02em;
  }
}
@media only screen and (min-width: 520px) {
  .text-button {
    letter-spacing: 0.02em;
  }
}
</style>
