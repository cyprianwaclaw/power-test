<template>
    <NuxtLayout name="edit-settings">
        <div class="mb-7">
            <h1 class="title-h2">Dane do faktury</h1>
          </div>
      <div class="white-retangle">
          <div class="row-table-start -mt-3 flex justify-between">
            <div class="flex gap-3">
              <p class="text-des-mobile">Kod</p>
              <div v-if="company.postcode">
                <h2 class="title-menu-mobile">{{ company.postcode }}</h2>
              </div>
              <div v-else>
                <h2 class="text-gary text-sm font-thin mt-0.5 primary-color">wprowadź kod miasta</h2>
              </div>
            </div>
          </div>
          <div class="row-table-start flex justify-between">
            <div class="flex gap-3">
              <p class="text-des-mobile">Miejscowość</p>
              <div v-if="company.city">
                <h2 class="title-menu-mobile">{{ company.city }}</h2>
              </div>
              <div v-else>
                <h2 class="text-gary text-sm font-thin mt-0.5 primary-color">wprowadź miejscowość </h2>
              </div>
            </div>
          </div>
          <div class="row-table-start flex justify-between">
            <div class="flex gap-3">
              <p class="text-des-mobile">Ulica</p>
              <div v-if="company.street">
                <h2 class="title-menu-mobile">{{ company.street }}</h2>
              </div>
              <div v-else>
                <h2 class="text-gary text-sm font-thin mt-0.5 primary-color">wprowadź nazwę ulicy</h2>
              </div>
            </div>        
          </div>
            <div class="row-table-start flex justify-between">
              <div class="flex gap-3">
                <p class="text-des-mobile">Mieszkanie</p>
                <div v-if="company.building_number">
                  <h2 class="title-menu-mobile">{{ company.building_number }}</h2>
                </div>
                <div v-else>
                  <h2 class="text-gary text-sm font-thin mt-0.5 primary-color">wprowadź nazwę mieszkania</h2>
                </div>
              </div>        
            </div>
          <div class="row-table-end flex justify-between">
            <div class="flex gap-3">
              <p class="text-des-mobile">Lokal</p>
              <div v-if="company.house_number">
                <h2 class="title-menu-mobile">{{ company.house_number }}</h2>
              </div>
              <div v-else>
                <h2 class="text-gary text-sm font-thin mt-0.5 primary-color">brak</h2>
              </div>
            </div>          
          </div>
      </div>
      <div class="flex justify-end mt-5"><NuxtLink to="/panel/ustawienia/edycja/dane-faktura">
        <p class="primary-color text-sm font-medium">Edytuj</p>
      </NuxtLink></div>
  
      <!-- FINISH retangle with company data  -->
    </NuxtLayout>
  </template>
  
  <script setup lang="ts">
  import { storeToRefs } from "pinia";
  import { useUser } from "@/store/useUser";
  
  definePageMeta({
    middleware: "auth",
  });
  
  const userStore = useUser();
  const { getCompany } = storeToRefs(userStore);
  await userStore.getSettingsUser();
  let allCompany = getCompany.value;
  let company = allCompany.address
  </script>
  
  <style scoped></style>
  