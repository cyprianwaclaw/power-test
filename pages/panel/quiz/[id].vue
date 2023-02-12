<template>
    <div class="mx-12 py-10">
      <div class="mb-12">
        <p>test quiz id: {{ route.params.id }}</p>
        <h1 class="">Tytuł quizu: {{ quiz.title }}</h1>
        <h2 class="">Kategoria: {{ findCategory.name }}</h2>
        <img :src="quiz.image" class="" />
        <div>
          <h2>Pytanie 1: {{ start.next_question.question }}</h2>
          <p>Odpowiedzi:</p>
          <div v-for="answers in start.next_question.answers" :key="answers.id">
            <p>{{ answers.answer }}- {{ answers.id }}</p>
          </div>
          <p>id_pytania: {{ start.next_question.id }}</p>
          <pre>
  Pytanie:{{ correct }} 
  Odpowiedzi: {{ correctAnswer1 }} </pre
          >
        </div>
      </div>
      <pre>
      {{ quiz }}
      {{ findCategory }}
      <!-- TODO znalezienie id pytania -->
      {{ start }}
      {{ start.next_question.answers[0].id }}
      </pre>
      <div>
        <button @click="postAnswer" class="bg-blue-300 px-5 py-3 border rounded-xl">
          Wyślij odpowidź
        </button>
        {{ NextQuestion }}
        <p>test</p>
      </div>
    </div>
  </template>
  
  <script setup lang="ts">
  import { storeToRefs } from "pinia";
  import { useQuiz } from "@/store/useQuiz";
  const route = useRoute();
  const quizState = useQuiz();
  // ! musi być await
  await quizState.getCategory();
  await quizState.getSingleQuiz(route.params.id);
  await quizState.startingQuiz(route.params.id);
  const { categories } = storeToRefs(quizState);
  const { singleQuiz } = storeToRefs(quizState);
  const { startQuiz } = storeToRefs(quizState);
  const { answer } = storeToRefs(quizState);
  let quiz = singleQuiz.value;
  let quizCategories = categories.value;
  let start = startQuiz.value;
  await quizState.cAnswer(start.next_question.id);
  await quizState.correctAnswerId(start.next_question.id);
  const answerQuiz = start.submission_id;
  // await quizState.correctAnswerId()
  console.log("poprawna" + answer.value);
  let correctAnswer1 = answer.value;
  async function postAnswer() {
    await quizState.postAnswerNextQuestion(
      start.submission_id,
      start.next_question.id,
      start.next_question.answers[0].id
    );
  }
  // await quizState.getNextQuestion( start.submission_id)
  const findCategory = quizCategories.find(({ id }) => id === quiz.category_id);
  const { correctAnswer } = storeToRefs(quizState);
  let correct = correctAnswer.value;
  console.log("poprawna" + correctAnswer.value);
  console.log("submission_id: " + answerQuiz);
  console.log(findCategory);
  console.log(singleQuiz.value);
  const { nextQuestion } = storeToRefs(quizState);
  let NextQuestion = nextQuestion.value;
  await quizState.getNextQuestion(start.submission_id);
  const { getNextQuestionTest } = storeToRefs(quizState);
  let getNext = getNextQuestionTest.value;
  console.log('Następne pytanie' + getNext);
  </script>
  
  <style scoped lang="scss"></style>