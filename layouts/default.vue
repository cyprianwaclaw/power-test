<template>
    <div class="own-container">
<slot />
    </div>
</template>

<script setup lang="ts">

</script>

<style scoped>
@media only screen and (max-width: 640px){
    .own-container{
       max-width: 400px;
       padding-left: 12px;
       padding-right: 12px;
        margin-right: auto;
        margin-left: auto;
        ;
    }
}
@media only screen and (max-width: 1024px){
    .own-container{
        width: 1100px;
        padding-left: 12px;
        padding-right: 12px;
        margin-right: auto;
        margin-left: auto;
        ;
    }
}
@media only screen and (max-width: 1536px){
    .own-container{
        width: 100px;
        padding-left: 12px;
        padding-right: 12px;
        margin-right: auto;
        margin-left: auto;
        ;
    }
}

@media only screen and (min-width: 1536px){
    .own-container{
        width: 1100px;
        padding-left: 12px;
        padding-right: 12px;
        margin-right: auto;
        margin-left: auto;
        ;
    }
}

</style>