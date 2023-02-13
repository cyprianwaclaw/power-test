<template>
  <NuxtLayout name="edit-settings">
    <!-- user avatar image -->
    <div class="grid place-items-center">
      <div v-if="user.avatar_path" class="">
        <img :src="user.avatar_path" class="" />
      </div>
      <div v-else class="">
        <Icon name="carbon:user-avatar-filled" class="" color="#BFCBEE" size="120" />
      </div>
    </div>
    <div class="grid place-items-center mb-12 mt-3">
      <p class="font-medium text-xl">{{ user.name }} {{ user.surname }}</p>
      <p class="text-gray fontmedium text-sm mt-0.5">{{ user.email }}</p>
    </div>
    <!-- START retangle with user data  -->
    <div class="white-retangle">
      <NuxtLink to="/panel/ustawienia">
        <div class="row-table-start -mt-3 flex place-items-center justify-between">
          <div class="flex place-items-center gap-3">
            <p class="text-des-mobile">Imię:</p>
            <h2 class="title-menu-mobile">{{ user.name }}</h2>
          </div>
          <Icon name="ph:caret-right-bold" size="20" class="text-gray" />
        </div>
      </NuxtLink>
      <NuxtLink to="/panel/ustawienia">
        <div class="row-table-start flex place-items-center justify-between">
          <div class="flex place-items-center gap-3">
            <p class="text-des-mobile">Nazwisko:</p>
            <h2 class="title-menu-mobile">{{ user.surname }}</h2>
          </div>
          <Icon name="ph:caret-right-bold" size="20" class="text-gray" />
        </div>
      </NuxtLink>
      <NuxtLink to="/panel/ustawienia">
        <div class="row-table-start flex place-items-center justify-between">
          <div class="flex place-items-center gap-3">
            <p class="text-des-mobile">E-mail:</p>
            <h2 class="title-menu-mobile">{{ user.email }}</h2>
          </div>
          <Icon name="ph:caret-right-bold" size="20" class="text-gray" />
        </div>
      </NuxtLink>
      <NuxtLink to="/panel/ustawienia">
        <div class="row-table-end flex place-items-center justify-between">
          <div class="flex place-items-center gap-3">
            <p class="text-des-mobile">Telefon:</p>
            <!-- START gdy nie ma danych  -->
            <div v-if="user.phone">
              <h2 class="title-menu-mobile">{{ user.phone }}</h2>
            </div>
            <div v-else>
              <h2 class="title-menu-mobile">881-427-943</h2>
            </div>
            <!-- FINISH gdy nie ma danych  -->
          </div>
          <Icon name="ph:caret-right-bold" size="20" class="text-gray" />
        </div>
      </NuxtLink>
    </div>
    <!-- FINISH retangle with user data  -->
  </NuxtLayout>
</template>

<script setup lang="ts">
import { storeToRefs } from "pinia";
import { useUser } from "@/store/useUser";

definePageMeta({
  middleware: "auth",
});

const userStore = useUser();
const { currentUser } = storeToRefs(userStore);
await userStore.getUser();
let user = currentUser.value;

console.log(user.email.length);
</script>

<style scoped></style>
