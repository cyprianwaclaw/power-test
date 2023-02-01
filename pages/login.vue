<template>
  <div class="auth-background pt-14 flex">
    <NuxtLayout>
      <div class="bg-white mx-36 rounded-2xl shaddow-effect">
        <div class="w-full px-24 pb-16 pt-10">
          <h1 class="title-form">Login</h1>
          <!-- <input :class="{ active: isActive }" /> -->
          <Form @submit="onSubmit">
            <InputText class="" name="email" type="email" placeholder="Email" />
            <InputText
              class="mt-5"
              name="password"
              type="password"
              placeholder="Password"
            />
            <div v-if="loginError">
              <!-- <p class="pt-8 text-red-500 -mb-7">{{ hasError.text }}</p>
               -->
              <p class="pt-8 text-red-500 -mb-7">Errors: {{ error }} {{ invaliddata }}</p>
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
import { Error } from "@/utils/function";
import { storeToRefs } from "pinia";
import { Form } from "vee-validate";
import { useAuth } from "@/store/useAuth";

definePageMeta({
  middleware: "guest",
});

const authStore = useAuth();
const { loginError } = storeToRefs(authStore);
let error = loginError;
let invaliddata = loginError;

const schema = Yup.object().shape({
  email: Yup.string().email("Błędny email").required("Pole wymagane"),
  password: Yup.string().min(6).required("Pole wymagane"),
});

async function onSubmit(values) {
    const { email, password } = values;
    await authStore.loginUser(email,password);
    console.log(email)
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
.active {
  border-radius: 8px;
  border: 2px solid transparent;
  padding: 12px 15px;
  font-size: 14px;
  outline: none;
  background-color: rgb(227, 140, 140);
  width: 100%;
  transition: border-color 0.2s ease-in-out, color 0.2s ease-in-out,
    background-color 0.2s ease-in-out;
}
</style>
