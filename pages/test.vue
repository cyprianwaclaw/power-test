<template>
  <div class="min-h-screen bg-blue-100">
    <div class="" @click="inputColor()">
      <h1 class="">Logowanie</h1>
      <Form
        @submit="onSubmit"
        :validation-schema="schema"
        @invalid-submit="onInvalidSubmit"
      >
        <InputNotSuccess ref="inputField" class="base-input" type="email" :class="{
        errorInput: ErrorLogin.errorInput }" hasError: true name="email"
        placeholder="E-mail" />
        <InputNotSuccess
          type="password"
          :class="{ errorInput: ErrorLogin.errorInput }"
          class="mt-3"
          name="password"
          placeholder="Hasło"
        />
        <div v-if="!hideAfter">
          <!-- TODO:Chowanie komunikatu gdy nie ma błędu -->
          <div v-if="ErrorLogin.plMessage">
            <p class="errorUser red font-medium">
              <Icon
                name="ph:warning-circle-light"
                color="red"
                size="20"
                class="mb-1 mr-1.5"
              />{{ ErrorLogin.plMessage }}
            </p>
          </div>
        </div>
        <button class="submit-auth w-full mt-10" type="submit">Zaloguj się</button>
      </Form>
      <div class="sm:flex hidden">
        <p class="text-des">
          Nie masz jeszcze konta?
          <NuxtLink to="/rejestracja"
            ><span class="navigateM">Zarejestruj się</span></NuxtLink
          >
        </p>
      </div>
      <div class="sm:hidden md:hidden flex flex-col">
        <p class="text-des">Nie masz jeszcze konta?</p>
        <p class="navigateM -mt-7 mb-8"><NuxtLink to="/rejestracja" >Zarejestruj się</NuxtLink></p>
      </div>
    </div>
  </div>
</template>


<script setup lang="ts">
import * as Yup from "yup";
import { storeToRefs } from "pinia";
import { Form } from "vee-validate";
import { useAuth } from "@/store/useAuth";
import { ErrorInput, onInvalidSubmit } from "@/utils/function";

definePageMeta({
  middleware: "guest",
});

const authStore = useAuth();
const { error, loggedIn } = storeToRefs(authStore);

var hideAfter = true;
var ErrorLogin: any = false;

function inputColor() {
  ErrorLogin = false;
}

async function onSubmit(values: any) {
  const { email, password } = values;
  await authStore.loginUser(email, password);
  let input = ErrorInput(error.value);
  ErrorLogin = input;
  hideAfter = false;
}

const schema = Yup.object().shape({
  email: Yup.string().email("Błędny email").required("Proszę wpisać adres e-mail"),
  password: Yup.string()
    .min(8, "Hasło musi mieć powyżej 8 znaków")
    .required("Uzupełnij hasło"),
});

</script>

<style scoped></style>
