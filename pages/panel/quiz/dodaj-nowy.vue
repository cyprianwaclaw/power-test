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
        <div class="row-table-start -mt-3 flex">
          <InputNotBorder name="title" id="title" type="text" placeholder="Nazwa quizu" />
        </div>
        <div class="row-table-start -mt-3 flex">
          <InputNotBorder name="title" id="title" type="text" placeholder="Kategoria" />
        </div>
        <div class="row-table-start -mt-3 flex">
          <InputNotBorder name="title" id="title" type="text" placeholder="Szacowany czas trwania" />
        </div>
        <div class="row-table-start -mt-3 flex">
          <Field name="field" as="select" class="base-input-new-quiz">
            <optgroup label="4-legged pets">

              <option value="">Select value</option>
              <option value="..">...</option>
            </optgroup>
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
import { useUser } from "@/store/useUser";
import * as Yup from "yup";
import { Form, Field } from "vee-validate";
import { onInvalidSubmit } from "@/utils/function";

definePageMeta({
  middleware: "auth",
});

const difficult = ref()

const userStore = useUser();
const { getCompany } = storeToRefs(userStore);
await userStore.getSettingsUser();
let company = getCompany.value;
let companyAddress = company.address;

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
$text-black:#1461af;
$white:#ffffff;
$text-gray: #d02525;
$input-border:#E6E8EA;
.row-table-start {
  border-bottom: 1px solid #ededed;
  padding: 16px 28px 16px 8px;
  margin-left: 20px;
}

.base-input-new-quiz {
  display: block;
  width: 100%;
  margin-top: 4px;
  border-width: 1px;
  border-radius: 8px;
  border-color: #D1D5DB;
}

.base-input-new-quiz:focus {
  display: block;
  width: 100%;
  margin-top: 4px;
  border-width: 1px;
  border-radius: 8px;
  border-color: #618CFB;
}

.base-input-new-quiz:focus::placeholder {
  font-size: 0px
}

.base-input-new-quiz::placeholder {
  font-size: 16px;
  color: $text-gray
}

.base-input-new-quiz select {
  display: block;
  width: 100%;
  margin-top: 4px;
  border-width: 10px;
  border-radius: 8px;
  border-color: #D1D5DB;
}

.base-input-new-quiz select {
  display: block;
  width: 100%;
  margin-top: 4px;
  border-width: 10px;
  border-radius: 8px;
  border-color: #D1D5DB;
}

select:invalid {
  font-size: 16px;
  color: $text-gray;
}

select:invalid:focus {
  font-size: 16px;
  color: $text-black;
}

.select-selected.select-arrow-active:after {
  border-color: transparent transparent #fff transparent;
  top: 7px;
}
</style>
