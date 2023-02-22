<template>
  <div>


    <div class="fixed z-50 left-0 bottom-0 w-full" v-if="removeSucess">
      <div class="blur-background-update"></div>
      <div class="modal-view-update">    
          <div class="px-7 py-7 grid ">
              <div class="flex justify-center w-full">
                <Icon name="ph:check-circle-light" size="72" class="green mb-3" />
              </div>
              <p class="edit-message-modal">Pytanie zostało usuniętę pomyślnie </p>            
          </div>    
        <div class="border-top flex justify-end">
          <button class="button-modal primary-color" @click="removeSucess =! removeSucess">Okej</button>
        </div>
      </div>
    </div>


    <div class="fixed z-50 left-0 bottom-0 w-full" v-if="isRemove">
      <div class="blur-background-update"></div>
      <div class="modal-view-update">
        <div class="px-7 py-7 grid">
          <!-- <div class="flex justify-center w-full">
            <Icon name="ph:check-circle-light" size="72" class="green mb-3" />
          </div> -->
          <div>
            <p class="red text-center font-medium">Czy napewno chcesz usunąć pytanie ? </p>
            <p class="text-center mt-3 text-gray text-sm">
              Tej operacji nie można cofnąć
            </p>
          </div>
        </div>
        <div class="flex w-full border-top">
          <div class="flex w-full justify-center" @click="remove">
            <button class="button-modal1 red">Usuń</button>
          </div>
          <div class="vl"></div>
            <div class="flex w-full justify-center">
              <p class="button-modal1 text-gray" @click ="  isRemove = !isRemove">Anuluj</p>
            </div>
        </div>
      </div>
    </div>


    <div class="fixed z-50 left-0 bottom-0 w-full" v-if="isOpen">
      <div class="blur-background-update"></div>
      <div class="modal-view-update">
        <div class="px-7 py-7 grid">
          <div class="flex justify-center w-full">
            <Icon name="ph:check-circle-light" size="72" class="green mb-3" />
          </div>
          <div>
            <p class="edit-message-modal-title green text-center">Dziękujemy!</p>
            <p class="edit-message-modal">
              Twój quiz został przesłany do nas w celu weryfikacji, gdy zostanie
              weryfikowany poprawnie, zostaniesz o tym poinformowany
            </p>
          </div>
        </div>
        <div class="flex flex-col w-full">
          <div class="flex w-full justify-center border-top pl-3.5" @click="modalClose()">
            <button class="button-modal1 primary-color">Dodaj kolejny quiz</button>
          </div>
          <NuxtLink to="/panel">
            <div class="flex w-full justify-center border-top pl-3.5">
              <p class="button-modal1 text-gray">Wróć na stronę główną</p>
            </div>
          </NuxtLink>
        </div>
      </div>
    </div>
    <NuxtLayout name="panel">
      <h1 class="title-h1">Nowy quiz</h1>
      <h2 class="title-h2 mt-14 mb-8">Podstawowe informacje</h2>
      <Form
        class="mb-24"
        v-slot="{ values }"
        @submit="onSubmit"
        :validation-schema="schema"
        @invalid-submit="onInvalidSubmit"
      >
        <!-- początek formularza -->
        <!-- podstawowe informację -->
        <div class="white-retangle">
          <div class="row-table-start -mt-3 -pb-20 flex">
            <InputTextAreaNotBorder
              name="title"
              id="title"
              type="text"
              placeholder="Nazwa quizu"
            />
          </div>
          <div class="row-table-start -mt-2 -mb-1 flex place-items-end" @click="isTime()">
            <InputNotBorder
              name="time"
              class="time"
              id="timeInput"
              type="tel"
              :placeholder="timePlaceholder"
              :style="styleObject"
            />
            <p v-if="timeActive" class="font1 time1">minut</p>
          </div>
          <div class="row-table-start flex flex-col">
            <p v-if="values.category" class="text-des-mobile-add">Kategoria</p>
            <Field name="category" as="select" class="base-input-new-quiz" required>
              <option value="" hidden invalid>Wybierz kategorie</option>
              <option v-for="single in category" :key="single.id" :value="single.name">
                <p class="font1">{{ single.name }}</p>
              </option>
            </Field>
          </div>
          <div class="row-table-end mb-2 -mt-1.5 flex flex-col">
            <p v-if="values.difficult" class="text-des-mobile-add">Poziom trudności</p>
            <Field name="difficult" as="select" class="base-input-new-quiz" required>
              <option value="" hidden invalid>Wybierz poziom trudności</option>
              <option value="easy"><p class="font1">Łatwy</p></option>
              <option value="medium"><p class="font1">Średni</p></option>
              <option value="hard"><p class="font1">Trudny</p></option>
            </Field>
          </div>
        </div>
        <!-- opis quizu -->
        <h2 class="title-h2 mt-14 mb-8">Opis quizu</h2>
        <div class="white-retangle">
          <div class="row-table-end -mt-4 -pb-20 flex">
            <InputTextArea
              name="des"
              id="des"
              type="text"
              placeholder="Twój opis quizu"
            />
          </div>
        </div>
        <!-- zdjęcie quizu -->
        <!-- TODO: edycja -->
        <h2 class="title-h2 mt-14 mb-8">Zdjęcie</h2>
        <div class="white-retangle-image">
          <label class="image-retangle">
            <Icon
              name="carbon:cloud-upload"
              size="38"
              color="9F9F9F"
              class="justify-center flex w-full"
            />
            <Field name="image" type="file" />
            <h1>Dodaj zdjęcie</h1>
            <p>Kliknij tutaj aby dodać zdjęcie</p>
          </label>
        </div>

        <!-- pytania do quizu -->
        <h2 class="title-h2 mt-14 mb-8">Dodaj pytania do quizu</h2>
        <div v-for="(item, index) in form" :key="item.id" :class="{margin: item.line}"   class="white-retangle">      
          <p class="quest-text">Pytanie {{ index + 1 }}</p>
          <div v-if="index > 0">
              <p class="red text-xs w-full text-end -left-16 z-10 -mt-6  absolute" @click="  isRemove = !isRemove">
                Usuń 
              </p>
            </div>        
          <div class="row-table-start -mt-3 -pb-20 flex">
            <InputTextAreaNotBorder
              :name="index+'asweer'"
              id="title"
              type="text"
              placeholder="Nazwa quizu"
            />
          </div>
          <div class="row-table-start -mt-2 -mb-1 flex place-items-end" @click="isTime()">
            <InputNotBorder
              name="time"
              class="time"
              id="timeInput"
              type="tel"
              :placeholder="timePlaceholder"
              :style="styleObject"
            />
            <p v-if="timeActive" class="font1 time1">minut</p>
          </div>
          <div class="row-table-start flex flex-col">
            <p v-if="values.category" class="text-des-mobile-add">Kategoria</p>
            <Field name="category" as="select" class="base-input-new-quiz" required>
              <option value="" hidden invalid>Wybierz kategorie</option>
              <option v-for="single in category" :key="single.id" :value="single.name">
                <p class="font1">{{ single.name }}</p>
              </option>
            </Field>
          </div>
          <div class="row-table-end mb-2 -mt-1.5 flex flex-col">
            <p v-if="values.difficult" class="text-des-mobile-add">Poziom trudności</p>
            <Field name="difficult" as="select" class="base-input-new-quiz" required>
              <option value="" hidden invalid>Wybierz poziom trudności</option>
              <option value="easy"><p class="font1">Łatwy</p></option>
              <option value="medium"><p class="font1">Średni</p></option>
              <option value="hard"><p class="font1">Trudny</p></option>
            </Field>
          </div>
          <div class="mr-7 mb-3 mt-8">
            <p
              v-if="index + 1 == form.length"
              @click="newQuestionInput"
              class="text-end primary-color font-medium"
            >
              Kolejne pytanie
            </p>
          </div>
        </div>
        <div
          class="mt-9 justify-end flex"
          v-if="
            values.title && values.difficult && values.category && values.time
              ? false
              : true
          "
        >
          <button class="button-primary-disabled" disabled id="submit" type="submit">
            Prześlij quiz do akceptacji
            <Icon name="carbon:chevron-right" class="-mr-2" size="24" />
          </button>
        </div>
        <div v-else class="mt-9 justify-end flex">
          <button class="button-primary" id="submit" type="submit">
            Prześlij quiz do akceptacji
            <Icon name="carbon:chevron-right" class="-mr-2" size="24" />
          </button>
        </div>
        {{ values }}

        <!-- koniec formularza -->
      </Form>
    </NuxtLayout>
  </div>
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

const isOpen = ref(false);
const isRemove = ref(false);
const removeSucess = ref(false);

function modalClose() {
  isOpen.value = !isOpen.value;
  window.location.reload();
}


const styleObject = reactive({
  width: "100%",
});
const timeActive = ref(false);
const timePlaceholder = ref("Szacunkowy czas trwania");
function isTime() {
  document.getElementById("timeInput").focus();
  timeActive.value = true;
  timePlaceholder.value = "0";
  styleObject.width = "30px";
}

const form = reactive([
  {
    id: 1,
    title: "",
    answer1: "",
    answer2: "",
    answer3: "",
    answer4: "",
    line: false,
  },
]);

const remove = (index: any) => {
  isRemove.value = !isRemove.value;
  form.splice(index, 1);
  removeSucess.value =! removeSucess.value
};

const newQuestionInput = () => {
  console.log("Nowe pole do odpowiedzi");
  console.log(form);
  form.push({
    id: 2,
    title: "",
    answer1: "",
    answer2: "",
    answer3: "",
    answer4: "",
    line: true,
  });
};

const quizStore = useQuiz();
const { categories } = storeToRefs(quizStore);
await quizStore.getCategory();
let category = categories.value;

const schema = Yup.object().shape({
  title: Yup.string().max(80, "Ups! nazwa jest zbyt długa"),
  time: Yup.string()
    .matches(/^[0-9]*$/, "Wpisz liczbę")
    .max(2, "Quiz nie może być dłuższy niż 99 minut"),
});

function onSubmit(values: any) {
  let { title, difficult, field } = values;
  isOpen.value = !isOpen.value;
  console.log(values);
  console.log("test");
}
</script>
<style scoped lang="scss">
.row-table-start {
  border-bottom: 1px solid #ededed;
  padding: 14px 28px 14px 8px;
  margin-left: 20px;
}
select:invalid {
  color: #a7a2a2;
  font-size: 16px;
}

select::-ms-expand {
  display: none;
}
select {
  overflow: hidden !important;
  overflow: -moz-hidden-unscrollable !important;
  -webkit-appearance: none !important;
  -moz-appearance: none !important;
  appearance: none !important;
  font-size: 16px;
  font-weight: 500;
  box-shadow: none;
  outline: none;
  background: transparent;
  background-repeat: no-repeat;
}

.base-input-new-quiz,
.base-input-new-quiz:focus {
  font-size: 16px;
  margin-top: 4px;
  font-weight: 500;
  width: 100%;
}
.time {
  border-color: white;
  padding: 0px;
  font-size: 16px;
  font-weight: 500;
  margin-bottom: -2.5px;
}
.time::placeholder {
  font-size: 16px;
  font-weight: 500;
}

.base-input-new-quiz::placeholder {
  font-size: 16px;
  font-weight: 500;
}
.text-des-mobile-add {
  font-size: 14px;
  font-weight: 300;
  color: #a7a2a2;
  margin-top: 2px;
  margin-bottom: -6px;
  z-index: 10;
}
.font1 {
  font-size: 16px;
  font-weight: 500;
}
.time1 {
  margin-bottom: 3px;
  margin-left: 2px;
}
.button-modal1 {
  letter-spacing: 0.02em;
  margin-top: 4px;
  margin-bottom: 4px;
  font-size: 14px;
  font-weight: 600;
}
.edit-message-modal {
  line-height: 24px;
  font-weight: 400;
  font-size: 15px;
  text-align: center;
  margin-top: 10px;
}
.edit-message-modal-title {
  line-height: 27px;
  font-weight: 600;
  font-size: 21px;
  text-align: center;
}
.modal-view-update {
  background-color: white;
  border: solid transparent;
  border-radius: 24px;
  margin-left: 54px;
  margin-right: 54px;
  position: absolute;
  left: 0;
  right: 0;
  top: 25%;
  z-index: 100;
}
.border-top {
  border-top: 1px solid #e0e0e0 !important;
  padding-top: 6px;
  padding-bottom: 6px;
  display: flex;
  padding-right: 16px;
}
.image-retangle {
  display: flex;
  flex-direction: column;
  padding: 36px 37px;
  background: #f7f7f7;
  border: 2px dashed #9f9f9f;
  border-radius: 16px;
}

input[type="file"]::file-selector-button {
  display: hidden;
}
input[type="file"] {
  border: none;
  display: flex;
  justify-content: center;
}
.image-retangle h1 {
  text-align: center;
  margin-top: 6px;
  font-weight: 600;
  color: #9c9c9c;
}
.image-retangle p {
  text-align: center;
  margin-top: 2px;
  font-weight: 400;
  font-size: 14px;
  color: #9c9c9c;
}
.white-retangle-image {
  background-color: white;
  border-radius: 24px;
  padding: 33px;
}
.quest-text {
  font-size: 16px;
  margin-left: 28px;
  margin-top: 4px;
  margin-bottom: 6px;
  font-weight: 500;
}
.margin{
  margin-top: 34px;
}
.vl {
  border-left: 1px solid #e0e0e0 !important;
  margin-top: 3px;
  margin-bottom: 3px;
}
</style>
