<template>
  <NuxtLayout name="edit-settings">
    <div class="mb-7">
      <h1 class="title-h2">Edytuj dane personalne</h1>
    </div>
    <div class="white-retangle">
      <Form
        @submit="onSubmit"
        :validation-schema="schema"
        @invalid-submit="onInvalidSubmit"
      >
        <div class="row-table -mt-2">
          <InputSettings
            :color="namePlaceholder.class"
            name="name"
            label="Imię"
            id="name"
            type="name"
            :placeholder="namePlaceholder.placeholder"
          />
        </div>
        <div class="row-table">
          <InputSettings
            :color="surnamePlaceholder.class"
            name="surname"
            label="Nazwisko"
            id="surname"
            type="surname"
            :placeholder="surnamePlaceholder.placeholder"
          />
        </div>
        <div class="row-table">
          <InputSettings
            :color="emailPlaceholder.class"
            name="email"
            label="Adres e-mail"
            id="email"
            type="email"
            :placeholder="emailPlaceholder.placeholder"
          />
        </div>
        <div class="row-table-end">
          <InputSettings
            :color="phonePlaceholder.class"
            name="phone"
            label="Numer telefonu"
            id="phone"
            type="tel"
            :placeholder="phonePlaceholder.placeholder"
          />
        </div>
        <div class="flex justify-end mb-5">
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
import { onInvalidSubmit, ChangePlaceholderInput,  ChangeDataInput } from "@/utils/function";
import { resourceLimits } from "worker_threads";

definePageMeta({
  middleware: "auth",
});

const userStore = useUser();
await userStore.getSettingsUser();
const { getPersonal } = storeToRefs(userStore);
let personal = getPersonal.value;

const schema = Yup.object().shape({
  name: Yup.string()
    .matches(/^[A-Za-zżźćńółęąśŻŹĆĄŚĘŁÓŃ]*$/, "Please enter valid name")
    .max(20, "Imię nie może być dłuższe niż 20 znaków"),
  surname: Yup.string()
    .matches(/^[A-Za-zżźćńółęąśŻŹĆĄŚĘŁÓŃ]*$/, "Please enter valid name")
    .max(20, "Nazwisko nie może być dłuższe niż 20 znaków"),
  email: Yup.string()
    .email("Błędny email")
    .max(35, "Email nie może być dłuższe niż 35  znaków"),
  // odpowiedź z api
  phone: Yup.string()
    .matches(/^[0-9 ]*$/)
    .max(9, "Numer telefonu musi mieć 9 cyfr"),
});

const namePlaceholder = ChangePlaceholderInput(personal.name, "Wprowadź imię");
const surnamePlaceholder = ChangePlaceholderInput(personal.surname, "Wprowadź nazwisko");
const emailPlaceholder = ChangePlaceholderInput(personal.email, "Wprowadź adres e-mail");
const phonePlaceholder = ChangePlaceholderInput(
  personal.phone,
  "Wprowadź numer telefonu"
);

async function onSubmit(values: any) {
  let { name, surname, email, phone } = values;
  //  nadpisujemy wszystkie zmienne
  let nameNew = ChangeDataInput(name, personal.name);
  let surnameNew = ChangeDataInput(surname, personal.surname);
  let emailNew = ChangeDataInput(email, personal.email);
  let phoneNew = ChangeDataInput(phone, personal.phone);

  await userStore.updateUserPersonal(nameNew, surnameNew, emailNew, phoneNew);
  window.location.reload();
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