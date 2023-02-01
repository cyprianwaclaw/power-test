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
              :class="{ active: isActive }"
              v-model="email"
            />
            <input
              class="base-input"
              name="password"
              type="password"
              placeholder="Password"
              :class="{ active: isActive }"
              v-model="password"
            />
            <!-- <InputNotSuccess class="" name="email" type="email" placeholder="Email" />
            <InputNotSuccess
              class="mt-3"
              :class="{ active: isActive }"
              name="password"
              type="password"
              placeholder="Password"
            /> -->
            <div>
              <p class="pt-8 text-red-500 -mb-7">{{ errorMessage.plMessage }}</p>
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
import { Form } from "vee-validate";
import { ErrorMessage } from "@/utils/function";
import { storeToRefs } from "pinia";
import { useAuth } from "@/store/useAuth";

definePageMeta({
  middleware: "guest",
});

const email = ref("");
const password = ref("");

const authStore = useAuth();

const {
  loginErrorMessage,
  //  loginErrorErrorsEmail, loginErrorErrorsPassword
} = storeToRefs(authStore);

let isActive = ref(false);

let errorMessage: any = "";
async function onSubmit() {
  // const { email, password } = values;
  await authStore.loginUser(email.value, password.value);
  // console.log(loginErrorErrorsPassword.value)
  errorMessage = ErrorMessage(loginErrorMessage.value);
  isActive = errorMessage.errorInput
}

function onInvalidSubmit() {
  const submitBtn = document.querySelector(".submit-btn");
  submitBtn.classList.add("invalid");
  setTimeout(() => {
    submitBtn.classList.remove("invalid");
  }, 400);
}
</script>

<style scoped>

:root {
  --primary-color: #618CFB;
  --error-color: #f23648;
  --error-bg-color: #fddfe2;
  --success-color: #21a67a;
  --success-bg-color: #e0eee4;
}
.active {
  background-color: var(--error-bg-color);
  color: var(--error-color);
  border: 2px solid transparent;
  outline: none;
}
.active:focus {
  border-color: var(--error-color);
}

</style>
