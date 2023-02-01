<template>
  <div>
    <h1>Stona główna</h1>
    <div v-if="isUser">
      <NuxtLink to="/dashboard"><p class="account-linik">My account</p></NuxtLink>
    </div>
    <div v-else>
      <NuxtLink to="/login"><p class="account-linik">Login</p></NuxtLink>
    </div>
    <div>
      <form>
        <input
        placeholder="test"
        name="test"
        />
        <InputText
        placeholder="test"
        name="test"
        />
<button @click="testinput">Wyślij</button>
      </form>

    </div>
    <div>
      <buttton @click="logoutUser()">Wyloguj</buttton>
    </div>
  </div>
</template>

<script setup lang="ts">
import { storeToRefs } from "pinia";
import { useAuth } from "@/store/useAuth";

// definePageMeta({
// brak, bo każdy ma dostęp
//   middleware: "guest",
// });

const authStore = useAuth();
const { loggedIn } = storeToRefs(authStore);
let isUser = loggedIn.value;

function testinput(values:any){
  const {test} = values
  console.log(test)
}
async function logoutUser() {
  await authStore.logout();
}
</script>
