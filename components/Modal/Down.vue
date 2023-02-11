<template>
  <div class="fixed z-50 left-0 bottom-0 w-full" v-if="isOpen">
    <div class="dark-blur-background"></div>
    <div class="modal-view">
      <div class="flex columns-2 w-full justify-between mb-8">
        <p class="font-medium text-2xl">Wybierz akcję</p>
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
            <Icon name="ph:wallet-fill" color="2B3BC7" size="" class="blue circle-icon" />
            <p class="ml-5 text-base">Wypłać środki</p>
          </div>
        </NuxtLink>
      </div>
    </div>
  </div>
</template>
<script setup lang="ts">
var isOpen = ref(false);
function Modal() {
  isOpen.value = !isOpen.value;
}</script>
