<template>
  <div class="fixed z-50 left-0 bottom-0 w-full" v-if="isOpen">
    <div class="dark-blur-background">
    </div>
    <div class="modal-view">
      <div class="flex columns-2 w-full justify-between mb-8">
        <p class="font-medium text-2xl">Wybierz akcję</p>
        <Icon name="carbon:close" size="30" class="black-color w-12" @click="openModal()" />
      </div>
      <div class="mt-2">
       <NuxtLink to="/panel/quiz/dodaj-nowy"> 
          <div class="flex columns-2 w-full  mb-2 place-items-center">
            <Icon name="ph:lightning-fill" color="D19D38" size="" class="circle-icon" @click="openModal()" />
             <p class="ml-5 text-base">Nowy quiz</p>
           </div>
        </NuxtLink>
      </div>
      <div class="mt-5">
        <NuxtLink to="/panel/quiz/dodaj-nowy"> 
           <div class="flex columns-2 w-full  mb-2 place-items-center">
             <Icon name="ph:lightning-fill" color="D19D38" size="" class="circle-icon" @click="openModal()" />
              <p class="ml-5 text-base">Nowy quiz</p>
            </div>
         </NuxtLink>
       </div>
       <div class="mt-5">
        <NuxtLink to="/panel/quiz/dodaj-nowy"> 
           <div class="flex columns-2 w-full  mb-2 place-items-center">
             <Icon name="ph:lightning-fill" color="D19D38" size="" class="circle-icon" @click="openModal()" />
              <p class="ml-5 text-base">Nowy quiz</p>
            </div>
         </NuxtLink>
       </div>
      </div>
    </div>
  <div class="px-2 sm:py-4 w-fullflex bg-white w-full fixed left-0 bottom-0">
    <div class="flex w-full justify-beetwen py-2">
      <div class="w-full">
        <NuxtLink to="/panel">
          <Icon name="ph:house-light" size="33" class="nav-icon" />
        </NuxtLink>
      </div>
      <div class="w-full">
        <NuxtLink to="/panel/quiz">
          <Icon name="ph:game-controller-light" size="33" class="nav-icon" />
        </NuxtLink>
      </div>
      <div class="w-full" @click="openModal">
        <Icon name="ph:plus-circle-light" size="33" class="nav-icon" />
      </div>
      <div class="w-full">
        <NuxtLink to="/panel/zaproszeni"
          ><Icon name="ph:users-light" size="33" class="nav-icon"
        /></NuxtLink>
      </div>
      <div class="w-full">
        <NuxtLink to="/panel/konto"
          ><Icon name="ph:user-circle-light" size="33" class="nav-icon"
        /></NuxtLink>
      </div>
    </div>
  </div>
</template>
<script setup lang="ts">
const route = useRoute();
const routeName = route.name;
console.log(routeName);

var isOpen = ref(false);
// console.log(isOpen.value);
function openModal() {
  isOpen.value =!  isOpen.value
  // console.log(isOpen.value);
}
</script>
<style scoped>
.nav-icon {
  color: #a7a2a2;
  width: 100%
}

.modal-view{
  background-color: white;
  border: solid transparent;
  border-radius: 46px 46px 0px 0px;

  padding: 24px 24px 24px 24px;
  position: relative;
  z-index: 100;
}
.circle-icon{
  background: rgba(209, 157, 56, 0.25);
  border: solid transparent;
  width: 47px;
  height: 47px;
  padding: 8px;
  border-radius: 100%;
}
</style>
