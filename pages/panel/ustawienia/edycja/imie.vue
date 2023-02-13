<template>
  <NuxtLayout name="edit-settings">
    <Form
    class="retangle"
      @submit="onSubmit"
      :validation-schema="schema"
      @invalid-submit="onInvalidSubmit"
    >
        <p class="text-des-mobile pb-1.5">Twoje imię</p>
          <InputSettings
          name="name"
          id="name"
          label="test"
          type="name"
          :placeholder="placeholderInput" 
          />
          <div class="flex justify-end">
              <button class="button-primary mt-8" id="submit" type="submit">Gotowe</button>
          </div>
    </Form>
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
.retangle {
  border-radius: 18px;
  background-color: white;
  padding: 28px 34px 28px 34px;
}
.settings-input {
  border: 1px solid white;
  padding: 0px;
}
.settings-input::placeholder {
  color: #212427;
  font-weight: 500;
  font-size: 17px;
}
</style>
