<template>
  <div>
    <div class="fixed z-50 left-0 bottom-0 w-full" v-if="isOpen">
      <div class="dark-blur-background"></div>
      <div class="modal-view h-80">
        <div class="flex columns-2 w-full justify-between mb-8">
          <p class="font-medium text-2xl">Filtruj quizy</p>
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
    <div class="fixed margin z-10 flex w-full justify-end">
        <div class="open-filter" @click="Modal">
          <Icon name="ph:faders" size="32" color="white" />
        </div>
    </div>
    <NuxtLayout name="panel">
      <!-- <input  class="mb-5" type="search" v-model="search" placeholder="Wyszukaj quiz..."/>
      <div v-for="quiz in searchInput" :key="quiz.id">
      <div v-if="search.length">
        {{ quiz.title }}
      </div>
    </div>
    <div v-if="results">
      <p>brak wyników</p>
    </div> -->
      <h1 class="title-h1 mb-4">Wszystkie quizy</h1>
        <QuizCard v-for="quiz in quizes" :key="quiz.id" :quiz="quiz" />
      <div class="h-44"></div>
    </NuxtLayout>
  </div>
</template>

<script setup lang="ts">
import { storeToRefs } from "pinia";
import { useQuiz } from "@/store/useQuiz";

definePageMeta({
  middleware: "auth",
});

const results = ref(false)
const search:any = ref()
const quiz = useQuiz();
const { allQuiz, allQuizName } = storeToRefs(quiz);
await quiz.getAllQuiz();
await quiz.getAllName();
let quizes = allQuiz.value;
let allquizes = allQuizName.value;
const isOpen = ref(false);
function Modal() {
  isOpen.value = !isOpen.value;
}
const searchInput:any = computed(()=>{
  return allQuizName.value.filter((quiz) => quiz.title.toLowerCase().includes(search.value))
})
watch(searchInput,(newValue:any)=>{
if (newValue.length == 0){
  results.value = true
} else{
  results.value = false
}
})

</script>
<style scoped>
.margin {
  margin-top: 450px;
}
.open-filter {
  color: white;
  background-color: #618cfb;
  padding: 8px 6px 8px 9px;
  border: 1px solid transparent;
  border-radius: 14px 0px 0px 14px;
}
</style>
