<template>
    <div class="mx-12 py-10">
      <div class="mb-12">
        <p>test quiz id: {{ route.params.id }}</p>
      
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