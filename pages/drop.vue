<template>
	<div>
        <img v-show="imageUrl"
        :src="imageUrl"
        class="w-48 h-48 object-cover">
   <div>
     <input type="file"
            accept="image/*"
            @change="handleImageSelected">
   </div>

	</div>
</template>

<script setup lang="ts">
 let message = ref("");
    let images = ref([]);
    let { imageFile, imageUrl, handleImageSelected } = useImageUpload();
</script>
