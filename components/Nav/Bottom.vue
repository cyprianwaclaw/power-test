<template>
  <div class="fixed z-50 left-0 bottom-0 w-full" v-if="isOpen">
    <div class="dark-blur-background"></div>
    <div class="modal-view">
      <div class="flex columns-2 w-full justify-between mb-8">
        <p class="font-medium text-2xl">Wybierz akcję</p>
        <Icon
          name="carbon:close"
          size="30"
          class="black-color w-12"
          @click="Modal()"
        />
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
      <div class="mt-5"  @click="Modal()">
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
  <div class="nav-border-bottom px-2 sm:py-4 w-fullflex bg-white w-full fixed left-0 bottom-0">
    <div class="flex w-full justify-beetwen py-2">
      <div class="w-full">
        <div v-if="routeName == 'home'">
          <Icon name="ph:house-fill" size="33" class="nav-icon primary-color" />
        </div>
        <div class="w-full" v-else>
          <NuxtLink to="/panel">
            <Icon name="ph:house-light" size="33" class="nav-icon" />
          </NuxtLink>
        </div>
      </div>
      <div class="w-full">
        <div v-if="routeName == 'quiz'">
          <Icon name="ph:game-controller-fill" size="33" class="nav-icon primary-color" />
        </div>
        <div class="w-full" v-else>
          <NuxtLink to="/panel/quiz">
            <Icon name="ph:game-controller-light" size="33" class="nav-icon" />
          </NuxtLink>
        </div>
      </div>
      <div class="w-full" @click="Modal">
        <Icon name="ph:plus-circle-light" size="33" class="nav-icon" />
      </div>
      <div class="w-full">
        <div v-if="routeName == 'invite'">
          <Icon name="ph:users-fill" size="33" class="nav-icon primary-color" />
        </div>
        <div class="w-full" v-else>
          <NuxtLink to="/panel/zaproszeni">
            <Icon name="ph:users-light" size="33" class="nav-icon" />
          </NuxtLink>
        </div>
      </div>
      <div class="w-full">
        <div v-if="routeName == 'account'">
          <Icon name="ph:user-circle-fill" size="33" class="nav-icon primary-color" />
        </div>
        <div class="w-full" v-else>
          <NuxtLink to="/panel/konto">
            <Icon name="ph:user-circle-light" size="33" class="nav-icon" />
          </NuxtLink>
        </div>
      </div>
    </div>
  </div>
</template>
<script setup lang="ts">
import { RouteChange } from "@/utils/function";
const route = useRoute();

var isOpen = ref(false);
function Modal() {
  isOpen.value = !isOpen.value;
}

const routeName = RouteChange(route.path);
</script>
<style scoped>

.circle-icon {
  border: solid transparent;
  width: 47px;
  height: 47px;
  padding: 8px;
  border-radius: 100%;
}
.nav-icon{
  width: 100%
}
.green {
  background: rgba(43, 181, 40, 0.25);
}
.gold {
  background: rgba(209, 157, 56, 0.25);
}
.blue {
  background: rgba(43, 59, 199, 0.17);
}
.nav-border-bottom{
  border-top: 1px solid #EDEDED; 
}
</style>
