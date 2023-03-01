<template>
  <div>
    <div class="fixed z-50 left-0 bottom-0 w-full" v-if="isOpen">
      <div class="dark-blur-background"></div>
      <div class="modal-view h-80">
        <div class="flex columns-2 w-full justify-between mb-8">
          <p class="font-medium text-2xl">Edytuj zdjęcie</p>
          <Icon name="carbon:close" size="30" class="black-color w-12" @click="Modal()" />
        </div>
        <div class="mt-2" @click="Modal()">
          <NuxtLink to="/panel/quiz/dodaj-nowy">
            <div class="flex columns-2 w-full mb-2 place-items-center">
              <Icon
                name="ph:lightning-fill"
                color="D19D38"
                size=""
                class="gold circle-icon"
              />
              <p class="ml-5 text-base">Nowy quiz</p>
            </div>
          </NuxtLink>
        </div>
        <div class="mt-5" @click="Modal()">
          <div class="flex columns-2 w-full mb-2 place-items-center">
            <Icon
              name="ph:user-circle-plus-fill"
              color="26AB22"
              size=""
              class="green circle-icon"
            />
            <p class="ml-5 text-base">Skopiuj link polecający</p>
          </div>
        </div>
        <div class="mt-5" @click="Modal()">
          <NuxtLink to="/panel/konto/srodki/wyplata">
            <div class="flex columns-2 w-full mb-2 place-items-center">
              <Icon
                name="ph:wallet-fill"
                color="2B3BC7"
                size=""
                class="blue circle-icon"
              />
              <p class="ml-5 text-base">Wypłać środki</p>
            </div>
          </NuxtLink>
        </div>
      </div>
    </div>

    <NuxtLayout name="edit-settings">
      <!-- user avatar image -->
      <div class="grid place-items-center">
        <div v-if="user.avatar_path" class="">
          <img :src="user.avatar_path" class="" />
        </div>

        <div class="" v-if="imageUrl">
          <img v-show="imageUrl" :src="imageUrl" class="w-36 h-36 border rounded-full" />
        </div>
        <div class="relative" v-else @click="Modal">
          <div class="bg-black w-8 h-8 border rounded-full absolute bottom-4 right-3">
            <Icon name="ph:camera-bold" color="#BFCBEE" size="20"  class="ml-1 mt-0.5" />
          </div>
          <Icon name="carbon:user-avatar-filled" color="#BFCBEE" class="w-36 h-36" />
        <!-- <label class="flex justify-center" v-else>
          <input
            name="image"
            type="file"
            accept=".png, .jpg, .jpeg"
            @change="handleImageSelected"
            class="avatar-input"
          /> -->
        <!-- </label> -->
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
  </div>
</template>

<script setup lang="ts">
import { storeToRefs } from "pinia";
import { useUser } from "@/store/useUser";

definePageMeta({
  middleware: "auth",
});

let isOpen = ref(false);
function Modal() {
  isOpen.value = !isOpen.value;
}

let message = ref("");
let images = ref([]);
let { imageFile, imageUrl, handleImageSelected } = useImageUpload();

const userStore = useUser();
const { currentUser } = storeToRefs(userStore);
await userStore.getUser();
let user = currentUser.value;
</script>

<style scoped>
.avatar-input {
  display: none;
}

.centered-axis-x {
  position: absolute;
  left: 50%;
  transform: translate(-50%, 0);
}
</style>
