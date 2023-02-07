<template>
  <div>
    <div v-if="CheckNav">
      <NavGuest />
    </div>
    <div v-else>
        <NavUser />
      </div>
    <div class="own-container">
      <slot />
    </div>
  </div>
</template>

<script setup lang="ts">
const route = useRoute()
let routeName = route.name;
//  TODO: nawigacja gdy logowany i wygolownay
function ChangeRoute (route: any){
    var results = false
    if(route == 'logowanie'){
        results = true
    }
    return results
}
const CheckNav = ChangeRoute(routeName)
console.log(ChangeRoute(routeName))
</script>

<style scoped>
.own-container {
}
</style>
