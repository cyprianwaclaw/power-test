<template>
    <div
     class="base-input"
      :class="{ 'has-error': !!errorMessage, success: meta.valid }"
    >
      <label :for="name">{{ label }}</label>
      <input
      class="base-input"
        :name="name"
        :id="name"
        :type="type"
        :value="inputValue"
        :placeholder="placeholder"
        @input="handleChange"
        @blur="handleBlur"
      />
  
      <p class="help-message" v-show="errorMessage || meta.valid">
        {{ errorMessage || successMessage }}
      </p>
    </div>
  </template>
  
  <script setup lang="ts">
  import { toRef } from 'vue';
  import { useField } from 'vee-validate';
  
  const props = defineProps({
    type: {
      type: String,
      default: 'text',
    },
    value: {
      type: String,
      default: '',
    },
    name: {
      type: String,
      required: true,
    },
    label: {
      type: String,
    },
    successMessage: {
      type: String,
      default: '',
    },
    placeholder: {
      type: String,
      default: '',
    },
  });
  
  const name = toRef(props, 'name');
  
  const {
    value: inputValue,
    errorMessage,
    handleBlur,
    handleChange,
    meta,
  } = useField(name, undefined, {
    initialValue: props.value,
  });
  </script>
  
  