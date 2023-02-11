<template>
  <div class="cursor-pointer">
    <NuxtLink :to="`/panel/quiz/${quiz.id}`">
        <div class="bg-image">
            <img :src="quiz.image" class="quiz-grid-image bg-image  w-full" />
      </div>
      <div class="-mt-20 absolute">
      <h3 class="title-single-quiz-desktop">{{ quiz.title }}</h3>
      <div class="float-left flex mt-3 gap-3">
        <p class="quiz-description">{{ quiz.questions_count }} pytań</p>
        <div class="vl"></div>
        <p class="quiz-description">{{ quiz.time }} min</p>
        <div class="vl"></div>
        <p class="quiz-description">{{ quiz.difficulty }}</p>
      </div>
      </div>
    
    </NuxtLink>
  </div>
</template>

<script setup lang="ts">
import { Quiz } from "@/types";
defineProps<{ quiz: Quiz }>();
</script>

<style scoped lang="scss">
$gray: #b3b3b3;
.quiz-grid-image {
  border-radius: 24px;
  height: 270px;
  object-fit: cover;
}
.quiz-description {
  font-weight: 500;
  font-size: 12px;
  color: $gray;
}
.vl {
  border-left: 1px solid $gray;
  margin-top: 3px;
  margin-bottom: 3px;
}
.bg-image{
    z-index: 10;
    background: linear-gradient(27.47deg, rgba(0, 0, 0, 0.77) 31.09%, rgba(0, 0, 0, 0) 79.45%);
}
</style>