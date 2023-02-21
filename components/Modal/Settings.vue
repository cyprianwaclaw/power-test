<template>
    <div class="fixed z-50 left-0 bottom-0 w-full">
        <div class="blur-background-update"></div>
        <div class="modal-view-update">    
            <div class="px-7 py-7 grid">
              <div v-if="success==true">
                <div class="flex justify-center w-full">
                  <Icon name="ph:check-circle-light" size="72" class="green mb-3" />
                </div>
                <p class="edit-message-modal"><span class="green">Gratulacje!</span> Twoje zmiany zostały poprawnie zapisane </p>            
              </div>
              <div v-else>
                <div class="flex justify-center w-full">
                  <Icon name="ph:x-circle-light" size="72" class="red mb-3" />
                </div>
                <p class="edit-message-modal"><span class="red">Wystąpił błąd!</span> Wprowadzone dane są błędne, sprawdź poprawność danych</p>            
              </div>
            </div>    
          <div v-if="success==true" class="border-top flex justify-end">
            <button class="button-modal primary-color" @click="$emit('someEvent')">Okej</button>
          </div>
          <div v-else class="border-top flex justify-end">
            <button class="button-modal primary-color" @click="$emit('someEvent')">Popraw błędy</button>
          </div>
        </div>
      </div>
</template>

<script setup lang="ts">
defineProps({
isOpen:{type:Boolean,default:false},
})

const success = false;

</script>
<style scoped lang="sss">


</style>