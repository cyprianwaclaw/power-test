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
    <div class="white-retangle">
      <div class="row-table-start -mt-3 flex">
        <InputTextArea
        name="title"
        id="title"
        type="text"
        placeholder="Nazwa quizu"
        successMessage="Poprawny tytół"
        />
      
    </div>
    <div class="row-table-start -mt-3 flex">
      <InputNotBorder
      name="title"
      id="title"
      type="text"
      placeholder="Nazwa quizu"
      successMessage="Poprawny tytół"
      />
    
  </div>
</div>
  <div class="mt-8 justify-end flex"
  v-if="values.title ? false : true">
    <button class="button-primary" disabled  id="submit" type="submit">Gotowe</button>
  </div>
  <div v-else class="mt-8 justify-end flex">
    <button class="button-primary" id="submit" type="submit">Gotowe</button>
  </div>

    </Form>
  </NuxtLayout>
</template>


<script setup lang="ts">
import { storeToRefs } from "pinia";
import { useUser } from "@/store/useUser";
import * as Yup from "yup";
import { Form  } from "vee-validate";
import {onInvalidSubmit} from "@/utils/function";

definePageMeta({
  middleware: "auth",
});

const userStore = useUser();
const { getCompany } = storeToRefs(userStore);
await userStore.getSettingsUser();
let company = getCompany.value;
let companyAddress = company.address;



const schema = Yup.object().shape({
  title: Yup.string().max(10, "NIP ma 10 cyfr").required("Pole wymagane"),
  nip: Yup.string()
    .matches(/^[0-9 ]*$/, "Dozwolone tylko cyfry")
    .max(10, "NIP ma 10 cyfr"),
  regon: Yup.string()
    .matches(/^[0-9 ]*$/, "Dozwolone tylko cyfry")
    .max(9, "REGON ma 9 cyfr"),
  name: Yup.string()
    .matches(/^[A-Za-zżźćńółęąśŻŹĆĄŚĘŁÓŃ]*$/, "Please enter valid name")
    .max(20, "Imię nie może być dłuższe niż 20 znaków"),
  surname: Yup.string()
    .matches(/^[A-Za-zżźćńółęąśŻŹĆĄŚĘŁÓŃ]*$/, "Please enter valid name")
    .max(20, "Nazwisko nie może być dłuższe niż 20 znaków"),
  email: Yup.string()
    .email("Błędny email")
    .max(35, "Email nie może być dłuższe niż 35  znaków"),
  phone: Yup.string()
    .matches(/^[0-9 ]*$/)
    .max(9, "Numer telefonu musi mieć 9 cyfr"),
});


function onSubmit(values:any){

}
</script>
<style scoped>
.row-table-start{
  border-bottom: 1px solid #EDEDED;
  padding: 16px 28px 16px 8px;
  margin-left: 20px;
}
</style>