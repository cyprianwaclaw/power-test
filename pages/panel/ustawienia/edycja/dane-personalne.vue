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
            placeholder="placeholderInput"
          />
        </div>
        <div class="row-table">
          <InputSettings
            name="name"
            label="Imię"
            id="name"
            type="name"
            placeholder="placeholderInput"
          />
        </div>
        <div class="row-table">
          <InputSettings
            name="name"
            label="Imię"
            id="name"
            type="name"
            placeholder="placeholderInput"
          />
        </div>
        <div class="row-table-end">
          <InputSettings
            name="name"
            label="Imię"
            id="name"
            type="name"
            placeholder="placeholderInput"
          />
        </div>
        <div class="flex justify-end mb-3">
          <button class="button-primary mt-3 mr-7" id="submit" type="submit">
            Gotowe
          </button>
        </div>
      </Form>
    </div>
  </NuxtLayout>
</template>

<script setup lang="ts">
import { useUser } from "@/store/useUser";
import * as Yup from "yup";
import { storeToRefs } from "pinia";
import { Form } from "vee-validate";
import { onInvalidSubmit, ChangePlaceholderInput } from "@/utils/function"

definePageMeta({
  middleware: "auth",
});

const userStore = useUser();
const { currentUser } = storeToRefs(userStore);

const schema = Yup.object().shape({
    name: Yup.string().min(1, "Wpisz pierwszą literę").max(20, "Imię nie może być dłuższe niż 20 znaków").required("Pole nie może być puste"),
})

const placeholderInput = ChangePlaceholderInput('Cyprian')

async function onSubmit(values: any) {}
</script>

<style scoped>
.row-table {
  border-bottom: 1px solid #ededed;
  padding: 16px 28px 16px 9px;
  margin-left: 20px;
}
.row-table-end {
  padding: 16px 28px 16px 9px;
  margin-left: 20px;
}
</style>
