<template>
  <div>
    <div class="fixed z-50 left-0 bottom-0 w-full" v-if="allQuestion">
      <div class="blur-background-update"></div>
      <div class="modal-view-update">
        <div class="px-7 py-7 grid">
          <div class="flex justify-center w-full">
            <Icon name="ph:x-circle-light" size="72" class="red mb-3" />
          </div>
          <p class="edit-message-modal">
            Uzupełnij tytół pytania, wszystkie odpowiedzi oraz zaznacz poprawną z nich
          </p>
        </div>
        <div class="border-top flex justify-end">
          <button class="button-modal primary-color" @click="allQuestion = !allQuestion">
            Okej
          </button>
        </div>
      </div>
    </div>

    <div class="fixed z-50 left-0 bottom-0 w-full" v-if="removeSucess">
      <div class="blur-background-update"></div>
      <div class="modal-view-update">
        <div class="px-7 py-7 grid">
          <div class="flex justify-center w-full">
            <Icon name="ph:check-circle-light" size="72" class="green mb-3" />
          </div>
          <p class="edit-message-modal">Pytanie zostało usuniętę pomyślnie</p>
        </div>
        <div class="border-top flex justify-end">
          <button
            class="button-modal primary-color"
            @click="removeSucess = !removeSucess"
          >
            Okej
          </button>
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
            <p class="red text-center font-medium">Czy napewno chcesz usunąć pytanie ?</p>
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
            <p class="button-modal1 text-gray" @click="isRemove = !isRemove">Anuluj</p>
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
      <!-- <ModalCrop
      v-if="showModal"
      :minAspectRatioProp="{width: 8, height: 8}"
      :maxAspectRatioProp="{width: 8, height: 8}"
      @croppedImageData="setCroppedImageData"
  />
  <Image
  label="Cropped Image"
  :image="image"
/> -->
    <!-- {{ imageData.imageUrl }}imageData"/> -->

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
            <p v-if="values.category_id" class="text-des-mobile-add">Kategoria</p>
            <Field name="category_id" as="select" class="base-input-new-quiz" required>
              <option value="" hidden invalid>Wybierz kategorie</option>
              <option v-for="single in category" :key="single.id" :value="single.id">
                <p class="font1">{{ single.name }}</p>
              </option>
            </Field>
          </div>
          <div class="row-table-end mb-2 -mt-1.5 flex flex-col">
            <p v-if="values.difficulty" class="text-des-mobile-add">Poziom trudności</p>
            <Field name="difficulty" as="select" class="base-input-new-quiz" required>
              <option value="" hidden invalid>Wybierz poziom trudności</option>
              <option value="easy"><p class="font1">Łatwy</p></option>
              <option value="medium"><p class="font1">Średni</p></option>
              <option value="hard"><p class="font1">Trudny</p></option>
            </Field>
          </div>
        </div>
        <!-- opis quizu -->
        <h2 class="title-h2 mt-14 mb-8">Opis</h2>
        <div class="white-retangle">
          <div class="row-table-end -mt-4 -pb-20 flex">
            <InputTextArea
              name="description"
              id="description"
              type="text"
              placeholder="Twój opis quizu"
            />
          </div>
        </div>
        <!-- zdjęcie quizu -->
        <!-- TODO: edycja -->
        <h2 class="title-h2 mt-14 mb-8">Zdjęcie</h2>
        <div class="white-retangle-image" v-if="imageUrl">
          <img v-show="imageUrl"
          :src="imageUrl"
          class="w-full border rounded-2xl">
        </div> 
        <div class="white-retangle-image" :class="{ imagehidden: imageUrl }">
          <label class="image-retangle">
            <Icon
              name="carbon:cloud-upload"
              size="38"
              color="9F9F9F"
              class="justify-center flex w-full -mb-4 mt-3"
            />    <Field name="image" type="file"  accept=".png, .jpg, .jpeg" 
            @change="handleImageSelected"  class="default-file-input"/>
            <h1>Dodaj zdjęcie</h1>
            <p>Kliknij tutaj aby dodać zdjęcie</p>
          </label>
        </div>

        <!-- <div>  -->
          <!-- <Crop
            v-if="selectedImage"
            :src="selectedImage"
            @result="resultImage = $event"
            :aspect-ratio="1 / 1"
            :maxHeight=124
          /> -->
          <!-- <img v-if="resultImage" :src="resultImage" />
          <input ref="fileSelectorRef" type="file" accept="image/*" @change="onSelectedFile" />
          {{ file }}
          <p @click = "console1">console</p>
        </div> -->
        <!-- pytania do quizu -->
        <h2 class="title-h2 mt-14 mb-8">Pytania</h2>

        <div v-for="(item, index) in form" :key="index">
          <div
            class="white-retangle"
            v-if="form.length > 0"
            :class="{ margin: indexBigger(form.length) }"
          >
            <p class="quest-text">Pytanie {{ index + 1 }}</p>
            <div v-if="form.length >= 1" class="justify-end flex mr-6">
              <Icon
                name="carbon:close"
                size="22"
                class="red text-xs -mt-7 absolute"
                @click="isRemove = !isRemove"
              />
            </div>
            <div class="row-table-end flex place-items-center gap-3 mb-4 mt-1">
              <div class="">
                <p class="text-des-mobile-add">Treść pytania</p>
                <div>
                  <h2 class="font-medium mt-0.5">{{ item.title }}</h2>
                </div>
              </div>
            </div>
            <div class="row-table-start flex place-items-center gap-3">
              <div v-if="item.answer1.isCorrect">
                <Icon name="ph:check-circle-light" size="21" class="green" />
              </div>
              <div v-else class="w-5"></div>
              <div class="">
                <p class="text-des-mobile-add">Odpowiedź 1</p>
                <div>
                  <h2 class="font-medium mt-0.5">{{ item.answer1.title }}</h2>
                </div>
              </div>
            </div>
            <div class="row-table-start flex place-items-center gap-3">
              <div v-if="item.answer2.isCorrect">
                <Icon name="ph:check-circle-light" size="21" class="green" />
              </div>
              <div v-else class="w-5"></div>
              <div class="">
                <p class="text-des-mobile-add">Odpowiedź 2</p>
                <div>
                  <h2 class="font-medium mt-0.5">{{ item.answer2.title }}</h2>
                </div>
              </div>
            </div>
            <div class="row-table-start flex place-items-center gap-3">
              <!--! zmienić we waszystkich -->
              <div v-if="item.answer3.isCorrect">
                <Icon name="ph:check-circle-light" size="21" class="green" />
              </div>
              <div v-else class="w-5"></div>
              <div class="">
                <p class="text-des-mobile-add">Odpowiedź 3</p>
                <div>
                  <h2 class="font-medium mt-0.5">{{ item.answer3.title }}</h2>
                </div>
              </div>
            </div>
            <div class="row-table-end flex place-items-center gap-3">
              <div v-if="item.answer4.isCorrect">
                <Icon name="ph:check-circle-light" size="21" class="green" />
              </div>
              <div v-else class="w-5"></div>
              <div class="">
                <p class="text-des-mobile-add">Odpowiedź 4</p>
                <div>
                  <h2 class="font-medium mt-0.5">{{ item.answer4.title }}</h2>
                </div>
              </div>
            </div>
            <div class="w-full">
              <p class="edit-quest primary-color">Edytuj</p>
            </div>
          </div>
        </div>

        <div class="white-retangle" :class="{ margin: indexBigger(form.length) }">
          <p class="quest-text">Pytanie {{ form.length + 1 }}</p>
          <div class="row-table-start mt-3 -pb-20 flex">
            <textarea
              name="titleQuestion"
              v-model="titleQuestion"
              type="text"
              placeholder="Treść pytania"
            />
          </div>
          <!-- pytania do quizu -->
          <fieldset id="group">
          <div class="row-table-start -mt-2 -mb-1 flex place-items-end">
             <Field type="radio" name="group" v-model="radioCorrect"  value="correct1" />
            <input
              name="answer_1"
              v-model="answer_1"
              type="text"
              placeholder="Odpowiedź 1"
            />
          </div>
          <div class="row-table-start -mt-2 -mb-1 flex place-items-end">
             <Field type="radio" name="group" v-model="radioCorrect" value="correct2"  />
            <input
              name="answer_2"
              v-model="answer_2"
              type="text"
              placeholder="Odpowiedź 2"
            />
          </div>
          <div class="row-table-start -mt-2 -mb-1 flex place-items-end">
             <Field type="radio" name="group" v-model="radioCorrect"  value="correct3" />
            <input
              name="answer_3"
              v-model="answer_3"
              type="text"
              placeholder="Odpowiedź 3"
            />
          </div>
          <div class="row-table-end -mt-2 -mb-1 flex place-items-end">
             <Field type="radio" name="group" v-model="radioCorrect" value="correct4"  />
            <input
              name="answer_4"
              v-model="answer_4"
              type="text"
              placeholder="Odpowiedź 4"
            />
          </div>
        </fieldset>
          <div v-if="form.length + 1 == 1">
            <div
              class="mr-7 mb-3 mt-8"
              v-if="
                titleQuestion.length > 2 &&
                answer_1.length > 2 &&
                answer_2.length > 2 &&
                answer_3.length > 2 &&
                answer_4.length > 2 &&
                values.group
              "
            >
              <p @click="newQuestionInput" class="text-end primary-color font-medium">
                Dodaj pierwsze pytanie
              </p>
            </div>

            <div class="mr-7 mb-3 mt-8" v-else>
              <p
                @click="allQuestion = !allQuestion"
                class="text-end primary-color font-medium"
              >
                Dodaj pierwsze pytanie
              </p>
            </div>
          </div>
          <div v-else>
            <div
              class="mr-7 mb-3 mt-8"
              v-if="
                titleQuestion.length > 2 &&
                answer_1.length > 2 &&
                answer_2.length > 2 &&
                answer_3.length > 2 &&
                answer_4.length > 2 &&
                values.group
              "
            >
              <p @click="newQuestionInput" class="text-end primary-color font-medium">
                Dodaj
              </p>
            </div>

            <div class="mr-7 mb-3 mt-8" v-else>
              <p
                @click="allQuestion = !allQuestion"
                class="text-end primary-color font-medium"
              >
                Dodaj
              </p>
            </div>
          </div>
        </div>

       
        <div
          class="mt-9 justify-end flex"
          v-if="
          values.title && values.difficulty && values.category_id && values.time && form.length
              ? false
              : true
          "
        >
          <button class="button-primary-disabled" disabled id="submit" type="submit">
            Prześlij quiz do akceptacji
           <!-- <Icon name="carbon:chevron-right" class="-mr-2" size="24" /> -->
          </button>
        </div>
        <div class="mt-9 justify-end flex" v-else>
          <button class="button-primary" id="submit" type="submit">
            Prześlij quiz do akceptacji
            <!-- <Icon name="carbon:chevron-right" class="-mr-2" size="24" /> -->
          </button>
        </div>
        <!-- koniec formularza -->
      </Form>
    </NuxtLayout>
  </div>
</template>

<script setup lang="ts">
import { storeToRefs } from "pinia";
import { ref, reactive } from "vue";
import { useQuiz } from "@/store/useQuiz";
import * as Yup from "yup";
import { Form, Field } from "vee-validate";
import { onInvalidSubmit, indexBigger } from "@/utils/function";
import { Cropper } from 'vue-advanced-cropper'
import 'vue-advanced-cropper/dist/style.css';

let showModal = ref(true)
let imageData = ref(null)
const IMAGETEST = ref(null)
const NewImage = ref()
console.log(NewImage.value)

const setCroppedImageData = (data) => {
        imageData = data
        image.value = data.imageUrl
        console.log(data.imageUrl)
        IMAGETEST.value = imageData.file
        //  IMAGETEST.value = new File ([data.imageUrl], 'test.jpg', {type: 'image'})
        console.log(IMAGETEST.value)
        NewImage.value = URL.revokeObjectURL(data.imageUrl)
  console.log(NewImage.value)
    }

// let fileInput = ref(null)
// let cropper = ref(null)
// let uploadedImage = ref(null)
// const NewImage = ref()
// console.log(NewImage.value)
// const getUploadedImage =(e)=>{
//   const file = e.target.files[0]
//   console.log(file)
//   uploadedImage.value = URL.createObjectURL(file)
//   console.log(uploadedImage.value)
//   NewImage.value = URL.revokeObjectURL(uploadedImage.value)
//   console.log(NewImage.value)
// }
// console.log(NewImage.value)


// let dataImage = new FormData();
// dataImage.append('image', imageData.file || '')
//             dataImage.append('height', imageData.height || '')
//             dataImage.append('width', imageData.width || '')
//             dataImage.append('left', imageData.left || '')
//             dataImage.append('top', imageData.top || '')



const quizStore = useQuiz();
const { categories, newQuizId, newQuestionId } = storeToRefs(quizStore);
await quizStore.getCategory();
let category = categories.value;

let message = ref("");
    let images = ref([]);
    let { imageFile, imageUrl, handleImageSelected } = useImageUpload();

const resultImage = ref();
const selectedImage = ref<any>();
let file = ref()

const onSelectedFile = (event: Event) => {
   file.value = (event.target as HTMLInputElement).files?.[0];
  if (file) {
    selectedImage.value = URL.createObjectURL(file.value);
    // selectedImage.value = file.value
  }
};



// const urlToObject= async()=> {
//   const response = await fetch(selectedImage.value);
//   // here image is url/location of image
//   const blob = await response.blob();
//   const file = new File([blob], 'image.jpg', {type: blob.type});
//   console.log(file);
// }



// let newImage = ref<any>();

// let blob = 'data:image/png;base64,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'
// let fileImageNew = new File([resultImage.value], 'image12354545.jpg', {type: "image/png"});
// newImage.value = fileImageNew[0];

console.log()

// function console1(){
//     console.log(imageFile.value)
//     console.log(typeof(file.value))
//     console.log(resultImage.value)
//     console.log(fileImageNew)
//     console.log(resultImage.value)
// }


let isDisabled = true

let image = ref()

let titleQuestion = ref("");
let answer_1 = ref("");
let answer_2 = ref("");
let answer_3 = ref("");
let answer_4 = ref("");
let radioCorrect = ref("")

const allQuestion = ref(false);

definePageMeta({
  middleware: "auth",
});




function isCorrect1(params: any){
    let results = false 
  if(params=='correct1'){
   results = true
  }else{
  results = false
}
    return results
}
function isCorrect2(params: any){
    let results = false 
  if(params=='correct2'){
   results = true
  }else{
  results = false
}
    return results
}
function isCorrect3(params: any){
    let results = false 
  if(params=='correct3'){
   results = true
  }else{
  results = false
}
    return results
}
function isCorrect4(params: any){
    let results = false 
  if(params=='correct4'){
   results = true
  }else{
  results = false
}
    return results
}

const isOpen = ref(false);
const isRemove = ref(false);
const removeSucess = ref(false);

function modalClose() {
  isOpen.value = !isOpen.value;
  // window.location.reload();
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

let form = reactive<any>([]);

const remove = (index: any) => {
  isRemove.value = !isRemove.value;
  form.splice(index, 1);
  removeSucess.value = !removeSucess.value;
};

const newQuestionInput = () => {
  let formL = form.length;

  form.push({
    title: titleQuestion.value,
    answer1: {
      title: answer_1.value,
      isCorrect: isCorrect1(radioCorrect.value),
    },
    answer2: {
      title: answer_2.value,
      isCorrect: isCorrect2(radioCorrect.value),
    },
    answer3: {
      title: answer_3.value,
      isCorrect: isCorrect3(radioCorrect.value),
    },
    answer4: {
      title: answer_4.value,
      isCorrect: isCorrect4(radioCorrect.value),
    },
  });

  titleQuestion.value = "";
  answer_1.value = "";
  answer_2.value = "";
  answer_3.value = "";
  answer_4.value = "";
  radioCorrect.value = ""
};


const schema = Yup.object().shape({
  title: Yup.string().max(80, "Ups! nazwa jest zbyt długa"),
  time: Yup.string()
    .matches(/^[0-9]*$/, "Wpisz liczbę")
    .max(2, "Quiz nie może być dłuższy niż 99 minut"),
});

async function onSubmit(values: any) {
  // !dodać obraz

  let { title, time, category_id, difficulty, description } = values;

  // !działa już dodawanie quizu
  await quizStore.postNewQuiz(title, time, category_id, difficulty,description,  imageFile.value);
  let quziId = newQuizId.value;

  console.log(newQuizId.value)
  form.forEach(async (answer) => {
    await quizStore.postNewQuestion(answer.title, quziId);

    let questionId = newQuestionId.value;

      await quizStore.postNewAnswer(
        answer.answer1.title,
        questionId,
        answer.answer1.isCorrect
      );
      await quizStore.postNewAnswer(
        answer.answer2.title,
        questionId,
        answer.answer2.isCorrect
      );
      await quizStore.postNewAnswer(
        answer.answer3.title,
        questionId,
        answer.answer3.isCorrect
      );
      await quizStore.postNewAnswer(
        answer.answer4.title,
        questionId,
        answer.answer4.isCorrect
      );
  }),
  isOpen.value = !isOpen.value;
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
  margin-top: -6px;
  font-weight: 600;
  color: #9c9c9c;
}
.image-retangle p {
  text-align: center;
  margin-top: 2px;
  font-weight: 400;
  font-size: 14px;
  color: #9c9c9c;
  margin-bottom: 12px;
}
.white-retangle-image {
  background-color: white;
  border-radius: 24px;
  padding: 33px;
}
.quest-text {
  font-size: 16px;
  margin-left: 28px;
  margin-top: 6px;
  margin-bottom: 6px;
  font-weight: 600;
}
.margin {
  margin-top: 36px;
}
.vl {
  border-left: 1px solid #e0e0e0 !important;
  margin-top: 3px;
  margin-bottom: 3px;
}

.edit-quest {
  font-size: 13px;
  font-weight: 500;
  text-align: end;
  padding: 12px 25px 5px 12px;
}

textarea {
  outline: none;
  font-size: 16px;
  font-weight: 500;
  width: 100%;
  overflow: hidden;
  min-height: 30px;
  max-height: 100px;
  border-color: white;
}
textarea::placeholder {
  font-size: 16px;
}
textarea:focus::placeholder {
  font-size: 0px;
}

input {
  outline: none;
  font-size: 16px;
  width: 100%;
  overflow: hidden;
  min-height: 30px;
  padding: 0px;
  max-height: 100px;
  font-weight: 500;
  border-color: white;
}
input::placeholder {
  font-size: 16px;
}
input:focus::placeholder {
  font-size: 0px;
}

.default-file-input {
	opacity: 0;
}


input[type=radio] {
   border-radius: 50%;
   width: 24px;
   height: 3px;
   margin-right: 14px;
   position: relative;
 }

.imagehidden{
display:none
 }
</style>
