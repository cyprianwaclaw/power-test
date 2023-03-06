<template>
  <div class="nav-border py-4 px-6 sm:py-4 fixed w-full flex bg-white z-10">
    <div class="flex w-full justify-between">
    <NuxtLink to="/panel"><img src="@/assets/file/logo.png" class="size-logo" /></NuxtLink>
<button @click="openSearch =! openSearch"><Icon name="ph:magnifying-glass-light" size="30" class="search-icon"/></button>
    </div>
  </div>
  <!-- serach  -->
  <div v-if="openSearch">
    <div class=" py-4 px-6 sm:py-4 fixed w-full bg-white z-10 top-14 md:hidden flex min-h-screen">
      <div class="w-full">
        <input  class="mb-5 w-full" v-model="search" placeholder="Wyszukaj quiz..."/>
        <div class="overflow-auto h-screen relative max-w-sm mx-auto bg-white   rounded-xl flex flex-col">

        <div v-for="quiz in searchInput" :key="quiz.id">
          <div v-if="search.length">
            <QuizCard :quiz="quiz" />
          </div>
        </div>
        </div>
        <div>
        <div v-if="results" class="absolute top-20">
          <p>brak wyników</p>
        </div>
      </div>
      </div>
    </div>
  </div>

</template>
<script setup lang="ts">
import { storeToRefs } from "pinia";
import { useQuiz } from "@/store/useQuiz";

const quiz = useQuiz();
const { allQuizName } = storeToRefs(quiz);

const openSearch = ref(false)
const results = ref(false)
const search:any = ref()
const searchInput:any = computed(()=>{
  return allQuizName.value.filter((quiz) => quiz.title.toLowerCase().includes(search.value))
})

watch(search,async(newValue:any)=>{
if(newValue.length>0){
  await quiz.getAllName();
}
})

watch(searchInput,async (newValue:any)=>{
if (newValue.length ){
  results.value = false
} else{
  results.value = true
}
})


</script>
<style scoped lang="scss">
@import "@/assets/style/variables.scss";

.color{
  background-color: $primary;
}
@media only screen and (max-width: 520px) {
  .size-logo {
    width: 175px;
  }
}

@media only screen and (min-width: 520px) {
  .size-logo {
    width: 175px;
  }
}
.search-icon{
  color: #C4C4C4;
}
</style>
