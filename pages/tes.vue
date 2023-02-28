<template>
  <div>
      <div class="white-retangle-image">
          <label class="image-retangle">
            <Icon
              name="carbon:cloud-upload"
              size="38"
              color="9F9F9F"
              class="justify-center flex w-full -mb-4 mt-3"
            />    <input name="image" type="file"  accept="image/*"
            @change="handleFileSelected($event)"  class="default-file-input"/>
          </label>
        </div>
        <!-- <p @clcik="text">click</p> -->
        {{ files }}
        {{ formData }}
        {{ newFile }}
  </div>
</template>

<script setup lang="ts">
const files = ref([]);
const name = ref('');

const handleFileSelected = ( event ) => {
 let uploadedFiles = event.target.files;

 for( let i = 0; i < uploadedFiles.length; i++ ){
       files.value.push( uploadedFiles[i] );
   }
}

let formData = new Image();

   formData.append('name', name.value);

   for( let i = 0; i < files.value.length; i ++ ){
       formData.append('images['+i+']', files.value[i] );
   }

   let newFile = formData.append('image', files.value[0])
</script>
