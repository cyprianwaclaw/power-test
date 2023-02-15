
<template>
    <button class="button-primary" :disabled="isDisabled">Submit</button>
</template>
<script setup lang="ts">
  import { useIsFormDirty, useIsFormValid } from "vee-validate";
  import { computed } from "vue";
  
  const isDirty = useIsFormDirty();
  const isValid = useIsFormValid();
  
  const isDisabled = computed(() => {
    return !isDirty.value || !isValid.value;
  });
</script>