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
        <div class="row-table-start -mt-3 flex">
          <textAreaNotBorder
            name="title"
            id="title"
            type="text"
            placeholder="Nazwa quizu"
          />
        </div>
        <div class="row-table-start -mt-3 flex" v-if="!timeActive">
          <p @click="isTime()">Szacunkowy czas trwania</p>
        </div>
        <div class="row-table-start -mt-3 flex" v-if="timeActive">
          <Field name="time" class="w-20" autofocus/> minut
        </div>

        <div class="row-table-start -mt-3 flex">
          <Field  name="category" as="select" class="base-input-new-quiz" required>
              <option value="" hidden invalid>Wybierz kategorie</option>
              <option v-for="single in category" :key="single.id" :value="single.name">{{ single.name }}</option>
          </Field>
        </div>

        <div class="row-table-start -mt-3 flex">
          <Field  name="diffucult" as="select" class="base-input-new-quiz" required>
              <option value="" hidden invalid>Wybierz poziom trudności</option>
              <option value="easy">Łatwe</option> 
              <option value="">Średnie</option>
              <option value="">Trudne</option>
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

const timeActive = ref(false)
function isTime(){
  timeActive.value = true
}

const quizStore = useQuiz();
const { categories} = storeToRefs(quizStore);
await quizStore.getCategory()
let  category = categories.value;


const schema = Yup.object().shape({
  title: Yup.string().max(10, "NIP ma 10 cyfr"),
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
select {
	appearance: none;
}
.base-input-new-quiz, .base-input-new-quiz:focus {
  border-radius: 8px;
  border-width: 1px;
  display: block;
  margin-top: 4px;
  width: 100%;
}

</style>
