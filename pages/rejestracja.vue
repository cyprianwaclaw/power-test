<template>
    <div class="auth-background pt-14 flex">
      <NuxtLayout>
        <div class="bg-white mx-36 rounded-2xl shaddow-effect">
          <div class="w-full px-24 pb-16 pt-10">
            <h1 class="title-form">Register</h1>
            <Form
            @submit="onSubmit"
            :validation-schema="schema"
            @invalid-submit="onInvalidSubmit"
            >
            <InputText
            name="name"
            type="text"
            placeholder="First name"
            successMessage="dsd"
            />
            <InputText
            class="mt-8"
          name="email"
          type="email"
          placeholder="Email"
          successMessage="dsd"
          />
            <InputText
            class="mt-8"
              name="password"
              type="password"
              placeholder="Password"
              successMessage="dsd"
              />
            <InputText
            class="mt-8"
              name="password_confirmation"
              type="password"
              placeholder="Confirm password"
              /><InputText
              class="mt-10"
              name="token"
              placeholder="Invitaion token"
              successMessage="dsd"
              />
              <button class="submit-btn" type="submit">Register</button>
            </Form>
          </div>
          </div>
        </NuxtLayout>
        </div>
      </template>
      
      <script setup lang="ts">
  import { ref } from "vue";
  import * as Yup from 'yup';
  import { storeToRefs } from "pinia";
  import { Form } from 'vee-validate';
  import { useAuth } from "@/store/useAuth";
  
  definePageMeta({
  middleware: "guest",
});
  const authStore = useAuth();
  
  async function onSubmit(values) {
      const { email, password } = values;
      await authStore.loginUser(email,password);
  }
  
  function onInvalidSubmit() {
    const submitBtn = document.querySelector('.submit-btn');
    submitBtn.classList.add('invalid');
    setTimeout(() => {
      submitBtn.classList.remove('invalid');
    }, 400);
  }
  
  const schema = Yup.object().shape({
    name: Yup.string().email("Błędny email").required("Pole wymagane"),
    email: Yup.string().email("Błędny email").required("Pole wymagane"),
    password: Yup.string().min(6).required("Pole wymagane"),
    password_confirmation: Yup.string().min(6).required("Pole wymagane"),
    token: Yup.string().min(6).required("Pole wymagane"),
  })
  
  </script>
  