<template>
  <NuxtLayout name="panel">
    <h1 class="title-h1">Nowy quiz</h1>
  </NuxtLayout>
</template>

<script setup lang="ts">
import { storeToRefs } from "pinia";
import { useAuth } from "@/store/useAuth";

definePageMeta({
  middleware: "auth",
});

</script>
