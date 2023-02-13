<template>
  <NuxtLayout name="edit-settings">
    <div class="mb-8">
      <h1 class="title-h1">Edytuj dane</h1>
    </div>
    <div class="white-retangle">
      <Form
        @submit="onSubmit"
        :validation-schema="schema"
        @invalid-submit="onInvalidSubmit"
      >
        <div class="row-table -mt-2">
          <InputSettings
            name="name"
            label="Imię"
            id="name"
            type="name"
            :placeholder="namePlaceholder"
          />
        </div>
        <div class="row-table">
          <InputSettings
            name="surname"
            label="Nazwisko"
            id="surname"
            type="surname"
            :placeholder="surnamePlaceholder"
          />
        </div>
        <div class="row-table">
          <InputSettings
            name="email"
            label="Adres e-mail"
            id="email"
            type="email"
            :placeholder="emailPlaceholder"
          />
        </div>
        <div class="row-table-end">
          <InputSettings
            :color="inputNotData"
            name="phone"
            label="Numer telefonu"
            id="phone"
            type="tel"
            :placeholder="phonePlaceholder"
          />
        </div>
        <div class="flex justify-end mb-4">
          <button class="button-primary mt-3 mr-7" id="submit" type="submit">
            Gotowe
          </button>
        </div>
      </Form>
    </div>
  </NuxtLayout>
</template>

<script setup lang="ts">
import * as Yup from "yup";
import { storeToRefs } from "pinia";
import { Form } from "vee-validate";
import { useUser } from "@/store/useUser";
import { onInvalidSubmit, ChangePlaceholderInput } from "@/utils/function";

definePageMeta({
  middleware: "auth",
});

const userStore = useUser();
await userStore.getSettingsUser();
const { getPersonal } = storeToRefs(userStore);
let personal = getPersonal.value;

const schema = Yup.object().shape({
  name: Yup.string()
    .matches(/^[A-Za-z ]*$/, "Please enter valid name")
    .max(20, "Imię nie może być dłuższe niż 20 znaków"),
  surname: Yup.string()
    .matches(/^[A-Za-z ]*$/, "Please enter valid name")
    .max(20, "Nazwisko nie może być dłuższe niż 20 znaków"),
  email: Yup.string()
    .email("Błędny email")
    .max(35, "Email nie może być dłuższe niż 35  znaków"),
  // odpowiedź z api
  phone: Yup.string()
    .matches(/^[0-9 ]*$/)
    .max(9, "Numer telefonu musi mieć 9 cyfr"),
});

const inputNotData = ref("input-not-data")
const inputData = ref("input-data")

const namePlaceholder = ChangePlaceholderInput(personal.name, "Wprowadź imię");
const surnamePlaceholder = ChangePlaceholderInput(personal.surname, "Wprowadź nazwisko");
const emailPlaceholder = ChangePlaceholderInput(personal.email, "Wprowadź adres e-mail");
const phonePlaceholder = ChangePlaceholderInput(personal.phone, "Twój numer telefonu");

async function onSubmit(values: any) {
  console.log("wysłano");
}
</script>

<style scoped>
.row-table {
  border-bottom: 1px solid #ededed;
  padding: 17px 28px 21px 9px;
  margin-left: 20px;
}
.row-table-end {
  padding: 16px 28px 16px 9px;
  margin-left: 20px;
}
</style>
