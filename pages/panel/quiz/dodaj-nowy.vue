<template>
  <NuxtLayout name="panel">
    <h1 class="title-h1">Nowy quiz</h1>
    <h2 class="title-h2 mt-10 mb-8">Podstawowe informacje</h2>
    <Form
      v-slot="{ values }"
      @submit="onSubmit"
      :validation-schema="schema"
      @invalid-submit="onInvalidSubmit"
      >
      <!-- początek formularza -->
      <div class="white-retangle">
        <div class="row-table-start -mt-3 -pb-20 flex">
          <textAreaNotBorder
            name="title"
            id="title"
            type="text"
            placeholder="Nazwa quizu"
          />
        </div>
        <div class="row-table-start -mt-2 -mb-1 flex place-items-end"  @click="isTime()">
          <Field name="time" class="time" ref="search" id="timeInput"  type="tel" :placeholder="timePlaceholder" :style="styleObject"/>
          <p v-if="timeActive" class="font1">minut</p>
        </div>

        <div class="row-table-start flex flex-col">
          <p v-if="values.category" class="text-des-mobile-add">Kategoria</p>
          <Field  name="category" as="select" class="base-input-new-quiz" required>
              <option value="" hidden invalid>Wybierz kategorie</option>
              <option v-for="single in category" :key="single.id" :value="single.name"><p class="font1">{{ single.name }}</p></option>
          </Field>
        </div>
        <div class="row-table-end mb-2 flex flex-col">
          <p v-if="values.difficult" class="text-des-mobile-add">Poziom trudności</p>
          <Field  name="difficult" as="select" class="base-input-new-quiz" required>
              <option value="" hidden invalid>Wybierz poziom trudności</option>
              <option value="easy"><p class="font1">Łatwy</p></option> 
              <option value="medium"><p class="font1">Średni</p></option>
              <option value="hard"><p class="font1">Trudny</p></option>
          </Field>
        </div>

      </div>
      <div class="mt-8 justify-end flex" v-if="values.title ? false : true">
        <button class="button-primary" disabled id="submit" type="submit">Gotowe</button>
      </div>
      <div v-else class="mt-8 justify-end flex">
        <button class="button-primary" id="submit" type="submit">Gotowe</button>
      </div>
      {{ values }}

      <!-- koniec formularza -->
    </Form>
    
  </NuxtLayout>
</template>

<script setup lang="ts">
import { storeToRefs } from "pinia";
import { useQuiz } from "@/store/useQuiz";
import * as Yup from "yup";
import { Form, Field } from "vee-validate";
import { onInvalidSubmit } from "@/utils/function";

definePageMeta({
  middleware: "auth",
});


const styleObject = reactive({
  width: "100%",
});
const timeActive = ref(false)
const timePlaceholder = ref('Szacunkowy czas trwania')
function isTime(){
  document.getElementById("timeInput").focus();
  timeActive.value = true
  timePlaceholder.value = '0'
  styleObject.width = '30px'
  
}

const quizStore = useQuiz();
const { categories} = storeToRefs(quizStore);
await quizStore.getCategory()
let  category = categories.value;


const schema = Yup.object().shape({
  title: Yup.string().max(80, "Ups! nazwa jest zbyt długa"),
});

function onSubmit(values: any) {
  let {
title, difficult, field
  } = values;
  console.log(values.field)
  console.log('test')
}
</script>
<style scoped lang="scss">


.row-table-start {
  border-bottom: 1px solid #ededed;
  padding: 16px 28px 16px 8px;
  margin-left: 20px;
}
select:invalid {
  color: #a7a2a2;
  font-size: 16px;
}

select::-ms-expand { display: none; }
select {
  overflow: hidden !important;
  overflow: -moz-hidden-unscrollable !important;
  -webkit-appearance: none !important;
  -moz-appearance: none !important;
  appearance: none !important;
  font-size: 16px;
  font-weight: 500;
    box-shadow:none;   
    outline:none;     
  background: transparent;
    background-repeat: no-repeat;

}

.base-input-new-quiz, .base-input-new-quiz:focus {
  font-size: 16px;
  margin-top: 4px;
  font-weight: 500;
  width: 100%;

}
.time{
  border-color: white;
  padding: 0px;
  font-size: 16px;
  font-weight: 500;
  margin-bottom: -2.5px;
}
.time::placeholder{
  font-size: 16px;
  font-weight: 500;
}

.base-input-new-quiz::placeholder{
  font-size: 16px;
  font-weight: 500;
}
.text-des-mobile-add {
  font-size: 14px;
  font-weight: 300;
  color: #a7a2a2;
  margin-top: 2px;
  margin-bottom: -6px;
  z-index:10
}
.font1{
  font-size: 16px;
  font-weight: 500;
}
</style>
