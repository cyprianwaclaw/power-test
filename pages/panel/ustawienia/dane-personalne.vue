<template>
  <NuxtLayout name="edit-settings">
    <!-- user avatar image -->
    <div class="grid place-items-center">
      <div v-if="user.avatar_path" class="">
        <img :src="user.avatar_path" class="" />
      </div>
      <div v-else class="">
        <Icon name="carbon:user-avatar-filled" class="" color="#BFCBEE" size="150" />
      </div>
    </div>
    <div class="grid place-items-center mb-12 mt-3">
      <div v-if="user.name">
        <!-- gdy nie ma nazwiska ? -->
        <h2 class="font-medium text-xl">{{ user.name }} {{ user.surname }}</h2>
      </div>
      <div v-else>
        <h2 class="font-medium text-xl">Imię Nazwisko</h2>
      </div>
      <div v-if="user.email">
        <h2 class="text-gray fontmedium text-sm mt-1">{{ user.email }}</h2>
      </div>
      <div v-else>
        <h2 class="text-gary text-sm font-thin mt-0.5">twój@email.pl</h2>
      </div>
    </div>
    <!-- START retangle with user data  -->
    <div class="white-retangle">
      <div class="row-table-start -mt-3 flex justify-between">
        <div class="flex gap-3">
          <p class="text-des-mobile">Imię</p>
          <div v-if="user.name">
            <h2 class="title-menu-mobile">{{ user.name }}</h2>
          </div>
          <div v-else>
            <h2 class="text-gary text-sm font-thin mt-0.5 primary-color">
              wprowadź imię 
            </h2>
          </div>
        </div>
      </div>
      <div class="row-table-start flex justify-between">
        <div class="flex gap-3">
          <p class="text-des-mobile">Nazwisko</p>
          <div v-if="user.surname">
            <h2 class="title-menu-mobile">{{ user.surname }}</h2>
          </div>
          <div v-else>
            <h2 class="text-gary text-sm font-thin mt-0.5 primary-color">
              wprowadź nazwisko 
            </h2>
          </div>
        </div>
      </div>
      <div class="row-table-start flex justify-between">
        <div class="flex gap-3">
          <p class="text-des-mobile">E-mail</p>
          <div v-if="user.email">
            <h2 class="title-menu-mobile">{{ user.email }}</h2>
          </div>
          <div v-else>
            <h2 class="text-gary text-sm font-thin mt-0.5 primary-color">
              wprowadź email 
            </h2>
          </div>
        </div>
      </div>
      <div class="row-table-end flex justify-between">
        <div class="flex gap-3">
          <p class="text-des-mobile">Telefon</p>
          <!-- START gdy nie ma danych  -->
          <div v-if="user.phone">
            <h2 class="title-menu-mobile">{{ user.phone }}</h2>
          </div>
          <div v-else>
            <h2 class="text-gary text-sm font-thin mt-0.5 primary-color">
              wprowadź numer
            </h2>
          </div>
          <!-- FINISH gdy nie ma danych  -->
        </div>
      </div>
    </div>
    <div class="flex justify-end mt-4">
      <NuxtLink to="/panel/ustawienia/edycja/dane-personalne">
        <p class="primary-color text-sm font-medium">Edytuj</p>
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

</script>

<style scoped></style>
