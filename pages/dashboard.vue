<template>
  <div>
    <pre>
        {{ user }}
        {{ fastTwoObject }}
      </pre>
      <div>
        <buttton @click="logoutUser()">Wylodfdfdfguj</buttton>
      </div>
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
