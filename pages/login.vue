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

            <!-- <div v-if="!errorErrorsEmail0">
              <p>tets</p>
            </div>
            <p class="errorStyle">{{ errorErrorsEmail1.plMessage }}</p>
              <div v-if="!errorErrorsEmail1.plMessage">
                <p> {{ errorErrorsEmail0.plMessage }}</p>
              </div> -->
              <!-- {{ errorErrorsEmail0 }} {{ errorErrorsEmail1 }} -->
              <p class="errorStyle">
              {{ errorErrorsEmail0.plMessage }}</p>
              {{ errorErrorsEmail.plMessage }}
            <input
              class="base-input"
              name="password"
              type="password"
              placeholder="Password"
              :class="{ errorInput: ErrorValue }"
              v-model="password"
            />
            <p class="errorStyle">{{ errorErrorsPassword.plMessage }}</p>
            <div>
              <p class="errorUser">
                {{ errorMessage }}</p>
            </div>
            <button class="submit-auth  w-full" type="submit">Login</button>
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
import { ErrorMessage,  ErrorErrorsEmail0, ErrorErrorsEmail1, ErrorErrorsPassword } from "@/utils/function";

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
let EmailTest = ref()
let ErrorValue = ref(false);
let errorErrorsEmail: any = "";
let errorErrorsEmail0: any = "";
let errorErrorsEmail1: any = "";
let errorErrorsPassword: any = "";
async function onSubmit() {
  // const { email, password } = values;
  await authStore.loginUser(email.value, password.value);
  // console.log(loginErrorErrorsPassword.value)
  errorMessage = ErrorMessage(loginErrorMessage.value);
  errorErrorsPassword = ErrorErrorsPassword(loginErrorErrorsPassword.value);
  errorErrorsEmail =  ErrorErrorsEmail0(loginErrorErrorsEmail.value);
  // errorErrorsEmail1 = loginErrorErrorsEmail.value;
  let emailMessage0:string = errorErrorsEmail0
  // let emailMessage1:string = errorErrorsEmail1[1]
  // let emailMessageFull0: string =  emailMessage0;
  // let emailMessageFull1: string =  emailMessage1;
  
  // console.log(ChnageUndefined(emailMessage0))
  // errorErrorsEmail0 =  ErrorErrorsEmail0(emailMessage0);
  let EmailTest = 'ERROR: ' + emailMessage0
  console.log(EmailTest)
  // errorErrorsEmail0 =  ErrorErrorsEmail0(emailMessageFull0);
  // errorErrorsEmail1 =  ErrorErrorsEmail1(emailMessageFull1);
  // console.log(emailMessageFull0)
  // console.log(emailMessageFull1)
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

<style scoped>
.errorStyle {
font-size: 13px;
margin-top: 2px;
margin-bottom: 8px;
color:red
}

.errorUser{
  font-size: 15px;
  margin-top: 44px;
  margin-bottom: 12px;
  color:red
  }
</style>
