<template>
  <NuxtLayout name="my-account">
    <!-- user avatar image -->
    <h1 class="title-h1">Dodane quizy</h1>

    <!-- <div class="absolute overflow-auto">
      <div class="flex w-full">

        <button class="single-item-active w-12 flex"> Wszystkie</button>
        <button class="single-item-dis-active w-full flex">  Zaakceptowane</button>
        <button class="single-item-dis-active w-full flex">  Do akceptacji</button>
      </div>
</div> -->

    <div class="overflow-x-auto space-x-10 w-11/12 absolute right-0 flex my-4">
      <button class="single-item-active w-full">Wszystkie</button>
      <button class="single-item-dis-active w-full">Aktywne</button>
      <button class="single-item-dis-active pr-10">Oczekujące na akceptację</button>
    </div>
    <div class="mt-32">
      aktywne quizy
      <QuizMyQuizes v-for="quiz in allActive" :key="quiz.id" :quiz="quiz" />
    </div>

    <div class="mt-32">
      zaakpectowane
      <QuizMyQuizes v-for="quiz in userAcceptQuiz" :key="quiz.id" :quiz="quiz" />
    </div>

    <div class="mt-32">
      niezaakceptowane
      <QuizMyQuizes v-for="quiz in userNotAcceptQuiz" :key="quiz.id" :quiz="quiz" />
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
const userStore = useUser();
const { currentUser } = storeToRefs(userStore);
await userStore.getUser();
let user = currentUser.value;

const quizStore = useQuiz();
const { activeQuiz, notActiveQuiz } = storeToRefs(quizStore);
await quizStore.getActiveQuiz();
await quizStore.getNotActiveQuiz();

let allActive = activeQuiz.value;
console.log(allActive);

let notActive = notActiveQuiz.value;
console.log(allActive);

let userQuizAll = allActive.filter((quiz) => quiz.user_id === user.id);
console.log(userQuizAll);
let userAcceptQuiz = allActive.filter((quiz) => quiz.is_active == 1);

let userNotAcceptQuiz = notActive.filter((quiz) => quiz.user_id === user.id);

console.log(userNotAcceptQuiz);
</script>

<style scoped></style>
