<template>
    <NuxtLayout name="panel">
<h1 class="title-h1">Twoje konto</h1>
<div>

<div class="columns-2 flex  gap-5">
  <div class="retangle gold"><NuxtLink to="">
    <Icon name="ph:game-controller-fill" color="D19D38" size="35"/>
    <p class="retangle-title family">Quizy</p>
  </NuxtLink></div>
  <div class="retangle gold"><NuxtLink to="">
    <Icon name="ph:game-controller-fill" color="D19D38" size="35"/>
    <p class="retangle-title family">Quizy</p>
  </NuxtLink></div>
</div>
<div class="retangle gold"><NuxtLink to="">
  <Icon name="ph:game-controller-fill" color="D19D38" size="35"/>
  <p class="retangle-title family">Quizy</p>
</NuxtLink></div>
</div>
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
  <style scoped>
  .retangle{
padding: 21px 20px 21px 24px;
margin-bottom: 20px;
border-radius: 8px;
width: 100%;
  }
  .retangle-title{
font-size: 17px;
font-weight: 500;
margin-top: 5px;
}
  .green{
    background: rgba(56, 209, 172, 0.17);
  }
  .gold{
    background: rgba(209, 157, 56, 0.17);
  }
  .blue{
    background: rgba(43, 59, 199, 0.17);
  }
  </style>