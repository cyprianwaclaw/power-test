<template>
  <NuxtLayout name="edit-settings">
    <div class="mb-10">
      <h1 class="title-h1">Edycja danych</h1>
    </div>
    <Form
      @submit="onSubmit"
      :validation-schema="schema"
      @invalid-submit="onInvalidSubmit"
    >
      <div class="white-retangle">
        <div class="row-table -mt-3">
          <InputSettings
            :color="company_namePlaceholder.class"
            name="company_name"
            label="Nazwa działalności"
            id="company_name"
            type="company_name"
            :placeholder="company_namePlaceholder.placeholder"
          />
        </div>
        <div class="row-table">
          <InputSettings
            :color="nipPlaceholder.class"
            name="nip"
            label="Numer NIP"
            id="nip"
            type="nip"
            :placeholder="nipPlaceholder.placeholder"
          />
        </div>
        <div class="row-table-end">
          <InputSettings
            :color="regonPlaceholder.class"
            name="regon"
            label="Numer REGON"
            id="regon"
            type="regon"
            :placeholder="regonPlaceholder.placeholder"
          />
        </div>
      </div>

      <div class="mb-7 mt-14">
        <h1 class="title-h2">Siedziba działalności</h1>
      </div>
      <div class="white-retangle">
        <div class="row-table -mt-3">
          <InputSettings
            :color="postcodePlaceholder.class"
            name="postcode"
            label="Kod pocztowy"
            id="postcode"
            type="postcode"
            :placeholder="postcodePlaceholder.placeholder"
          />
        </div>
        <div class="row-table">
          <InputSettings
            :color="cityPlaceholder.class"
            name="city"
            label="Miejscowość"
            id="city"
            type="city"
            :placeholder="cityPlaceholder.placeholder"
          />
        </div>
        <div class="row-table">
          <InputSettings
            :color="streetPlaceholder.class"
            name="street"
            label="Nazwa ulicy"
            id="street"
            type="street"
            :placeholder="streetPlaceholder.placeholder"
          />
        </div>
        <div class="row-table">
          <InputSettings
            :color="building_numberPlaceholder.class"
            name="building_number"
            label="Numer mieszkania"
            id="building_number"
            type="building_number"
            :placeholder="building_numberPlaceholder.placeholder"
          />
        </div>
        <div class="row-table-end">
          <InputSettings
            :color="house_numberPlaceholder.class"
            name="house_number"
            label="Numer lokalu"
            id="house_number"
            type="house_number"
            :placeholder="house_numberPlaceholder.placeholder"
          />
        </div>
      </div>
      <div class="mt-8 flex justify-end">
        <button class="button-primary" id="submit" type="submit">Gotowe</button>
      </div>
    </Form>
  </NuxtLayout>
</template>

<script setup lang="ts">
import * as Yup from "yup";
import { storeToRefs } from "pinia";
import { Form } from "vee-validate";
import { useUser } from "@/store/useUser";
import {
  onInvalidSubmit,
  ChangePlaceholderInput,
  ChangeDataInput,
} from "@/utils/function";
import { resourceLimits } from "worker_threads";

definePageMeta({
  middleware: "auth",
});

const userStore = useUser();
await userStore.getSettingsUser();
const { getCompany } = storeToRefs(userStore);
let allCompany = getCompany.value;
let company = allCompany.address;

const schema = Yup.object().shape({

  company_name: Yup.string()
    .matches(/^[A-Za-zżźćńółęąśŻŹĆĄŚĘŁÓŃ]*$/, "Please enter valid name")
    .max(20, "Imię nie może być dłuższe niż 20 znaków"),
    nip: Yup.string()
    .matches(/^[A-Za-zżźćńółęąśŻŹĆĄŚĘŁÓŃ]*$/, "Please enter valid name")
    .max(20, "Imię nie może być dłuższe niż 20 znaków"),
    regon: Yup.string()
    .matches(/^[A-Za-zżźćńółęąśŻŹĆĄŚĘŁÓŃ]*$/, "Please enter valid name")
    .max(20, "Imię nie może być dłuższe niż 20 znaków"),

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

const company_namePlaceholder = ChangePlaceholderInput(
  allCompany.name,
  "wprowadź nazwę działalności"
);
const nipPlaceholder = ChangePlaceholderInput(allCompany.nip, "wprowadź numer NIP");
const regonPlaceholder = ChangePlaceholderInput(allCompany.regon, "wprowadź numer REGON");
const cityPlaceholder = ChangePlaceholderInput(company.city, "wprowadź imię");
const postcodePlaceholder = ChangePlaceholderInput(company.postcode, "wprowadź imię");
const streetPlaceholder = ChangePlaceholderInput(company.street, "wprowadź nazwisko");
const building_numberPlaceholder = ChangePlaceholderInput(
  company.building_number,
  "wprowadź adres e-mail"
);
const house_numberPlaceholder = ChangePlaceholderInput(
  company.house_number,
  "wprowadź numer telefonu"
);

async function onSubmit(values: any) {
  let {
    company_name,
    nip,
    regon,
    city,
    postcode,
    street,
    building_number,
    house_number,
  } = values;

  let company_nameNew = ChangeDataInput(company_name, allCompany.name);
  let nipNew = ChangeDataInput(nip, allCompany.nip);
  let regonNew = ChangeDataInput(regon, allCompany.regon);

  let cityNew = ChangeDataInput(city, company.city);
  let postcodeNew = ChangeDataInput(postcode, company.postcode);
  let streetNew = ChangeDataInput(street, company.street);
  let building_numberNew = ChangeDataInput(building_number, company.building_number);
  let house_numberNew = ChangeDataInput(house_number, company.house_number);

  await userStore.updateUserCompany(
    company_nameNew,
    nipNew,
    regonNew,
    cityNew,
    postcodeNew,
    streetNew,
    building_numberNew,
    house_numberNew
  );
  // window.location.reload();
}
</script>

<style scoped>
.row-table {
  border-bottom: 1px solid #ededed;
  padding: 17px 28px 21px 9px;
  margin-left: 20px;
}
.row-table-end {
  padding: 16px 28px 14px 9px;
  margin-left: 20px;
}
</style>
