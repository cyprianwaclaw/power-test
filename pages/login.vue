<template>
  <div class="auth-background pt-14 flex">
    <NuxtLayout>
      <div class="bg-white mx-36 rounded-2xl shaddow-effect">
        <div class="w-full px-24 pb-16 pt-10">
          <h1 class="title-form">Login</h1>
          <!-- <input :class="{ active: isActive }" /> -->
          <Form @submit="onSubmit">
            <input
              class="base-input"
              name="email"
              type="email"
              placeholder="Email"
              :class="{ errorInput: ErrorValue }"
              v-model="email"
            />
            <p class=" text-red-500">{{ errorErrorsEmail.plMessage }}</p>
            <input
              class="base-input"
              name="password"
              type="password"
              placeholder="Password"
              :class="{ errorInput: ErrorValue }"
              v-model="password"
            />
            <div>
              <p class="pt-8 text-red-500 -mb-7">
                {{ errorErrorsPassword }}
                {{ errorMessage.plMessage }}</p>
            </div>
            <button class="submit-btn-login" type="submit">Login</button>
          </Form>
        </div>
      </div>
    </NuxtLayout>
  </div>
</template>

<script setup lang="ts">
import { ref } from "vue";
import * as Yup from "yup";
import { storeToRefs } from "pinia";
import { Form } from "vee-validate";
import { useAuth } from "@/store/useAuth";
import { ErrorMessage,  ErrorErrorsEmail, ErrorErrorsPassword } from "@/utils/function";

definePageMeta({
  middleware: "guest",
});

const email = ref("");
const password = ref("");

const authStore = useAuth();

const {
  loginErrorMessage,
   loginErrorErrorsEmail, loginErrorErrorsPassword
} = storeToRefs(authStore);


let errorMessage: any = "";
let ErrorValue = ref(false);
let errorErrorsEmail: any = "";
let errorErrorsPassword: any = "";
async function onSubmit() {
  // const { email, password } = values;
  await authStore.loginUser(email.value, password.value);
  // console.log(loginErrorErrorsPassword.value)
  errorMessage = ErrorMessage(loginErrorMessage.value);
  errorErrorsPassword = ErrorErrorsPassword(loginErrorErrorsPassword.value);
  errorErrorsEmail =  ErrorErrorsEmail(loginErrorErrorsEmail.value);
  ErrorValue = errorMessage.errorInput
}

function onInvalidSubmit() {
  const submitBtn = document.querySelector(".submit-btn");
  submitBtn.classList.add("invalid");
  setTimeout(() => {
    submitBtn.classList.remove("invalid");
  }, 400);
}
</script>

<style scoped lang="scss">
</style>
