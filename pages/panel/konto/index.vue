<template>
  <NuxtLayout name="panel">
    <h1 class="title-h1">Twoje konto</h1>
    <div class="columns-2 flex gap-5">
      <div class="retangle gold">
        <NuxtLink to="">
          <Icon name="ph:game-controller-fill" color="D19D38" size="34" />
          <p class="retangle-title family">Quizy</p>
        </NuxtLink>
      </div>
      <div class="retangle blue">
        <NuxtLink to="">
          <Icon name="ph:wallet-fill" color="2B3BC7" size="34" />
          <p class="retangle-title family">Środki</p>
        </NuxtLink>
      </div>
    </div>
    <div class="retangle green">
      <NuxtLink to="">
        <Icon name="ph:newspaper-fill" color="38D1AC" size="34" />
        <p class="retangle-title family">Faktury i płatności</p>
      </NuxtLink>
    </div>
    <!-- w zależności od pakietu -->
  <div class="mt-12 bg-white py-8 px-8">
    <p class="text-des-mobile text-sm">Obecnie posiadasz pakiet</p>
    <h3>Standard</h3>
    <p class="text">Aktualnie posiadasz pakiet 
      Standard, przejdź na<NuxtLink to="panel/premium"><span class="navigate"> PREMIUM</span></NuxtLink> i 
      zyskaj dodatkowe funkcję</p>
         
          <button class="button-primary mt-5">Przejdź na PREMIUM <Icon name="carbon:chevron-right" class="-mr-2" size="24" /></button>
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
<style scoped>
.retangle {
  padding: 16px 16px 16px 23px;
  margin-bottom: 20px;
  border-radius: 8px;
  width: 100%;
}
.retangle-title {
  font-size: 16px;
  font-weight: 500;
  margin-top: 6px;
}
.green {
  background: rgba(56, 209, 172, 0.17);
}
.gold {
  background: rgba(209, 157, 56, 0.17);
}
.blue {
  background: rgba(43, 59, 199, 0.17);
}

</style>
