<template>
    <NuxtLayout name="panel">
      <div>
      <h1 class="title-h1">Zaproszone osoby</h1>
        <p class="text mt-3">Zaproś znajomych do wspólnej gry i zyskaj bonus za każdego poleconego, który wykupi pakiet PREMIUM  <Icon name="ph:info-bold" size="20" class="inline mb-1 ml-1.5" color="#618CFB" /> </p>
        <button class="button-primary mt-7 mb-1">
          <!-- Przejdź na PREMIUM <Icon name="carbon:chevron-right" class="-mr-2" size="24" /> -->
          <div class="flex columns-2 place-items-center gap-1" @click="copyToken">
            <Icon name="ic:round-content-copy" size="20" class="white" />
            <p class="white">Skopiuj kod polecający</p>
          </div>
        </button>
      </div>
      <div v-if="!isInvetedUser">
        <div class="grid place-items-center mt-10">
          <Icon name="ph:users" size="166" color="#CFD8E0" />
          <p class="invite-text -mt-2 mb-5">Brak znajomych </p>
          <p class="font-base font-semibold primary-color place-items-center">Dlaczego warto polecać <Icon name="carbon:chevron-right" size="21" class="primary-color" /></p>
        </div>
      </div>
      <div v-else>
        <!--TODO: lista zaproszonych osób -->
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
  function copyToken() {}
  const isInvetedUser = false;
  </script>
  <style scoped>
  .invite-text{
font-style: normal;
font-weight: 800;
font-size: 38px;
color: #CFD8E0;
  }
</style>