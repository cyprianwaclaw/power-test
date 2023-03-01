<template>
  <NuxtLayout name="my-account">
    <h1 class="title-h1 mb-2">Dodane quizy</h1>
    <div
      class="overflow-x-scroll space-x-5 w-11/12 absolute right-0 flex py-4 whitespace-nowrap overflow-auto scrollbar-hide pr-10"
    >
      <button class="filter_button_disactive" :class="{filter_button_active: all }"  @click="allButton">Wszystkie</button>
      <button class="filter_button_disactive" :class="{filter_button_active: active}" @click="acceptButton">Aktywne</button>
      <button class="filter_button_disactive" :class="{filter_button_active: waiting}" @click="waitingButton">Oczekujące na akceptację</button>
    </div>
    <div class="mt-28" v-if="all">
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
    <div class="mt-28" v-if="active">
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
    <div class="mt-28" v-if="waiting">
      <div class="grid grid-cols-2 gap-5" v-if="userNotAcceptQuiz.length">
      <QuizMyQuizes v-for="quiz in userNotAcceptQuiz" :key="quiz.id" :quiz="quiz" />
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

const all = ref(true);
const active = ref();
const waiting = ref();

function acceptButton() {
  all.value = false;
  active.value = true;
  waiting.value = false;
}


function allButton() {
  all.value = true;
  active.value = false;
  waiting.value = false;
}


function waitingButton() {
  all.value = false;
  active.value = false;
  waiting.value = true;
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
let userNotAcceptQuiz = notActiveQuiz.value.filter((quiz) => quiz.user_id === user.id);

</script>

<style scoped>
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
</style>
