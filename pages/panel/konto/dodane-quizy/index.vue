<template>
  <NuxtLayout name="my-account">
    <!-- user avatar image -->
    <h1 class="title-h1">Dodane quizy</h1>

    <div class="mt-5">
      <div class="flex space-y-reverse mb-14">
      <button class="single-item-active"> Wszystkie</button>
      <div class="float-left">
        <button class="single-item-dis-active">  test</button>
      </div>
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
