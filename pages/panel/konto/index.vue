<template>
    <NuxtLayout name="panel">
<h1 class="title-h1">Twoje konto</h1>
<div>
  
  <div class="retangle gold"><NuxtLink to="">
    <Icon name="ph:game-controller-fill" color="D19D38" size="35"/>
    <p class="retangle-title family">Quizy</p>
  </NuxtLink></div>

</div>
    </NuxtLayout>
  </template>
  
  <script setup lang="ts">
  import { storeToRefs } from "pinia";
  import { useAuth } from "@/store/useAuth";
  
  definePageMeta({
    middleware: "auth",
  });
  
  const authStore = useAuth();
  const { user, fastTwo, loggedIn } = storeToRefs(authStore);
  await authStore.getUser();
  await authStore.getFastTwo();
  let userObject = user.value;
  let fastTwoObject = fastTwo.value;
  
  async function logoutUser() {
    await authStore.logout();
  }
  </script>
  