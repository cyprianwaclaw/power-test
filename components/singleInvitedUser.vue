<template>
  <div>
    <div class="">
      <div v-if="user.avatar_path">
        <img :src="user.avatar_path" class="" />
      </div>
      <div v-else>
        <Icon name="carbon:user-avatar-filled" class="" color="#BFCBEE" size="75" />
      </div>
      <p>{{ user.name }}</p>
      <div v-if="!user.is_premium" class="">
        <div class="flex place-items-center gap-1.5">
            <Icon name="fa:diamond" class="primary-color"  size="18" />
            <p class="premium primary-color">Premium</p>
        </div>
      </div>
      <div v-else>standard</div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { InvitedUser } from "@/types";
defineProps<{ user: InvitedUser }>();
</script>

<style scoped>
@media only screen and (max-width: 520px) {
  .premium {
    font-weight: 400;
    font-size: 16px;
    line-height: 22px;
  }
}

@media only screen and (min-width: 520px) {
}
</style>
