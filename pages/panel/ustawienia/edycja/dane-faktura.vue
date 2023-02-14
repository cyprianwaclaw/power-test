<template>
    <NuxtLayout name="edit-settings">
      <div class="mb-7">
        <h1 class="title-h2">Edytuj dane działalności</h1>
      </div>
      <div class="white-retangle">
        <Form
          @submit="onSubmit"
          :validation-schema="schema"
          @invalid-submit="onInvalidSubmit"
        >
          <div class="row-table -mt-2">
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
              label="Adres e-mail"
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
  const { getCompany } = storeToRefs(userStore);
  let allCompany = getCompany.value;
  let company = allCompany.address
  
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
  
  const cityPlaceholder = ChangePlaceholderInput(company.city, "Wprowadź imię");
  const postcodePlaceholder = ChangePlaceholderInput(company.postcode, "Wprowadź imię");
  const streetPlaceholder = ChangePlaceholderInput(company.street, "Wprowadź nazwisko");
  const building_numberPlaceholder = ChangePlaceholderInput(company.building_number, "Wprowadź adres e-mail");
  const house_numberPlaceholder = ChangePlaceholderInput(
    company.house_number,
    "Wprowadź numer telefonu"
  );
//   {city, postcode, street, building_number, house_number }
  async function onSubmit(values: any) {
    let {  city, postcode, street, building_number, house_number} = values;
    let cityNew = ChangeDataInput(city, company.city);
    let postcodeNew = ChangeDataInput(postcode, company.postcode);
    let streetNew = ChangeDataInput(street, company.street);
    let building_numberNew = ChangeDataInput(building_number, company.building_number);
    let house_numberNew = ChangeDataInput(house_number, company.house_number);
  
    await userStore.updateUserCompanyAddress(
     cityNew,
     postcodeNew,
     streetNew,
     building_numberNew,
     house_numberNew,
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
    padding: 16px 28px 16px 9px;
    margin-left: 20px;
  }
  </style>