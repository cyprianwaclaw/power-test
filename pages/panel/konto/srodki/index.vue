<template>
  <NuxtLayout name="my-account">
    <h1 class="title-h1 mb-2">Twoje środki</h1>
    <div
    class="w-full flex flex-row justify-start"
    >
      <button class="filter_button_disactive" :class="{filter_button_active1: saldo }"  @click="allButton">Saldo konta</button>
      <button class="filter_button_disactive" :class="{filter_button_active1: historia}" @click="acceptButton">Historia wypłat</button>
    </div>
    <div class="mt-28" v-if="saldo">
      <div class="grid grid-cols-2 gap-5" v-if="userQuizAll.length">
        <QuizMyQuizes v-for="quiz in userQuizAll" :key="quiz.id" :quiz="quiz" />
      </div>
      <div v-else>
      <div class="grid place-items-center mt-10">
        <Icon name="ph:game-controller-light" size="166" color="#CFD8E0" />
        <p class="invite-text -mt-2 mb-5">Brak quizów</p>
        <NuxtLink to="/panel/quiz/dodaj-nowy">
          <p class="font-base font-semibold primary-color place-items-center">
            Dodaj nowy quiz
            <Icon name="carbon:chevron-right" size="21" class="primary-color" />
          </p>
        </NuxtLink>
      </div>
      </div>
    </div>
    <div class="mt-28" v-if="historia">
      <div class="grid grid-cols-2 gap-5" v-if="userAcceptQuiz.length">
        <QuizMyQuizes v-for="quiz in userAcceptQuiz" :key="quiz.id" :quiz="quiz" />
      </div>
      <div v-else>
        <div class="grid place-items-center mt-10">
          <Icon name="ph:game-controller-light" size="166" color="#CFD8E0" />
          <p class="invite-text -mt-2 mb-5">Brak quizów</p>
          <NuxtLink to="/panel/quiz/dodaj-nowy">
            <p class="font-base font-semibold primary-color place-items-center">
              Dodaj nowy quiz
              <Icon name="carbon:chevron-right" size="21" class="primary-color" />
            </p>
          </NuxtLink>
        </div>
        </div>
    </div>
  </NuxtLayout>
</template>

<script setup lang="ts">
import { storeToRefs } from "pinia";
import { useQuiz } from "@/store/useQuiz";
import { useUser } from "@/store/useUser";

definePageMeta({
  middleware: "auth",
});

const saldo = ref(true);
const historia = ref();
const waiting = ref();

function acceptButton() {
  saldo.value = false;
  historia.value = true;
  waiting.value = false;
}


function allButton() {
  saldo.value = true;
  historia.value = false;
  waiting.value = false;
}



const userStore = useUser();
const { currentUser } = storeToRefs(userStore);
await userStore.getUser();
let user = currentUser.value;

const quizStore = useQuiz();
const { activeQuiz, notActiveQuiz, allQuiz } = storeToRefs(quizStore);
await quizStore.getActiveQuiz();
await quizStore.getNotActiveQuiz();
await quizStore.getAllQuiz()

let userQuizAll = allQuiz.value.filter((quiz) => quiz.user_id === user.id);
let userAcceptQuiz = activeQuiz.value.filter((quiz) => quiz.is_active == 1);
let userNotAcceptQuiz = notActiveQuiz.value.filter((quiz) => quiz.user_id === user.id && quiz.is_active==0);

</script>

<style scoped lang="scss">
@import "@/assets/style/_variables.scss";
.scrollbar-hide::-webkit-scrollbar {
  display: none;
}
.scrollbar-hide {
  -ms-overflow-style: none; /* IE and Edge */
  scrollbar-width: none; /* Firefox */
}
.invite-text {
  font-style: normal;
  font-weight: 800;
  font-size: 38px;
  color: #cfd8e0;
}

.filter_button_active1{
  padding: 2px;
  display: block;
  background-color: $primary;
}

</style>
