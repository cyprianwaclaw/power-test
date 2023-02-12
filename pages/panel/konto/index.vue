<template>
  <NuxtLayout name="panel">
    <h1 class="title-h1 pb-6">Twoje konto</h1>
    <div class="columns-2 flex gap-5">
      <div class="retangle gold">
        <NuxtLink to="">
          <Icon name="ph:game-controller-fill" color="D19D38" size="34" />
          <p class="retangle-title family">Quizy</p>
        </NuxtLink>
      </div>
      <div class="retangle blue">
        <NuxtLink to="">
          <Icon name="ph:wallet-fill" color="2B3BC7" size="34" />
          <p class="retangle-title family">Środki</p>
        </NuxtLink>
      </div>
    </div>
    <div class="retangle green">
      <NuxtLink to="">
        <Icon name="ph:newspaper-fill" color="38D1AC" size="34" />
        <p class="retangle-title family mb-1">Faktury i płatności</p>
      </NuxtLink>
    </div>
    <!-- w zależności od pakietu -->
    <div class="mt-12 mb-14 bg-white py-8 px-8 rounded-3xl">
      <p class="text-des-mobile">Obecnie posiadasz pakiet</p>
      <h3 class="font-semibold text-2xl mb-4 mt-1">Standard</h3>
      <p class="text">
        Aktualnie posiadasz pakiet Standard, przejdź na
        <NuxtLink to="/panel/premium"><span class="navigate"> PREMIUM </span></NuxtLink>i
        zyskaj dodatkowe funkcję
      </p>
      <button class="button-primary mt-6 mb-1">
        Przejdź na PREMIUM <Icon name="carbon:chevron-right" class="-mr-2" size="24" />
      </button>
    </div>
    <!-- koniec  -->
    <h2 class="title-h2 mb-7">Statystyki konta</h2>
    <div class="mb-9 white-retangle">
      <div class="row-table-start">
        <h2 class="title">{{ userPoints }}</h2>
        <div class="flex place-items-center gap-1.5">
          <p class="text-des-mobile">Ilość punktów</p>
          <Icon name="ph:info-bold" size="20" class="" color="#618CFB" @click="Modal" />
        </div>
      </div>
      <div class="row-table-start">
        <h2 class="title">{{ AddAnswer(correctAnswer, inCorrectAnswer) }}</h2>
        <p class="text-des-mobile">Liczba udzielonych odpowiedzi</p>
        <div class="flex columns-2 mt-5 mb-2">
          <div class="flex flex-col w-full">
            <p class="correct">{{ correctAnswer }}</p>
            <p class="correct">Poprawne</p>
          </div>
          <div class="flex flex-col w-full">
            <p class="bad">{{ inCorrectAnswer }}</p>
            <p class="bad">Błędne</p>
          </div>
        </div>
      </div>
      <div class="row-table-end">
        <h2 class="title">{{ users }}</h2>
        <p class="text-des-mobile">Liczba zaproszonych osób</p>
        <div class="flex columns-2 mt-4 mb-2 place-items-center gap-1" @click="copyToken">
          <Icon name="ic:round-content-copy" size="20" class="primary-color" />
          <p class="primary-color font-semibold">Skopiuj kod polecający</p>
          <div class="tooltip" v-if="tooltip">
            <span ref="tooltip" class="tooltiptext family">
              Skopiowano kod polecający
            </span>
          </div>
        </div>
      </div>
    </div>
    <div class="white-retangle">
      <NuxtLink to="/panel/ustawienia">
        <div class="row-table-start -mt-4 flex place-items-center justify-between">
          <div class="flex place-items-center">
            <Icon name="ph:gear-light" size="26" class="primary-color" />
            <h2 class="title-menu-mobile ml-2">Ustawienia</h2>
          </div>
          <Icon name="ph:caret-right-bold" size="20" class="text-gray" />
        </div>
      </NuxtLink>
      <NuxtLink to="/panel/wiadomosc">
        <div class="row-table-end flex place-items-center justify-between">
          <div class="flex place-items-center">
            <Icon name="ph:paper-plane-right-light" size="26" class="primary-color" />
            <h2 class="title-menu-mobile ml-2">Napisz do nas</h2>
          </div>
          <Icon name="ph:caret-right-bold" size="20" class="text-gray" />
        </div>
      </NuxtLink>
    </div>
    <div class="flex justify-end mt-14 pb-20">
      <div class="flex" @click="logoutUser()">
        <p class="one primary-color">Wyloguj się</p>
        <Icon
          name="material-symbols:logout-rounded"
          size="18"
          class="primary-color margin-top"
        />
      </div>
    </div>
  </NuxtLayout>
</template>

<script setup lang="ts">
import { AddAnswer } from "@/utils/function";
import { storeToRefs } from "pinia";
import { useUser } from "@/store/useUser";
import { useAuth } from "@/store/useAuth";

definePageMeta({
  middleware: "auth",
});

const tooltip = ref<boolean>();
const userStore = useUser();
await userStore.getUser();
await userStore.getInvitationToken();
await userStore.getUserStats();
await userStore.getInvitedUser();

const {
  point,
  invitationToken,
  correctAnswers,
  inCorrectAnswers,
  invitedCount,
} = storeToRefs(userStore);

let correctAnswer: number = correctAnswers.value;
let inCorrectAnswer: number = inCorrectAnswers.value;
let users: number = invitedCount.value;
let userPoints: number = point.value;

function Modal() {}
function copyToken(token: any) {
  var token: any = invitationToken.value;
  navigator.clipboard.writeText(token);
  tooltip.value = !tooltip.value;
  setTimeout(() => (tooltip.value = false), 1500);
}

async function logoutUser() {
  const authStore = useAuth();
  await authStore.logout();
}
</script>
<style scoped lang="scss">
.retangle {
  padding: 16px 16px 16px 23px;
  margin-bottom: 20px;
  border-radius: 8px;
  width: 100%;
}

.retangle-title {
  font-size: 16px;
  font-weight: 500;
  margin-top: 6px;
}
.green {
  background: rgba(56, 209, 172, 0.17);
}
.gold {
  background: rgba(209, 157, 56, 0.17);
}
.blue {
  background: rgba(43, 59, 199, 0.17);
}
.bad {
  font-size: 16px;
  color: #f23648;
  font-weight: 500;
}
.correct {
  font-size: 16px;
  color: #21a67a;
  font-weight: 500;
}
.title {
  font-size: 24px;
  font-weight: 600;
}
.one {
  font-weight: 600;
  font-size: 12px;
  line-height: 22px;
  letter-spacing: 0.02em;
}
.margin-top {
  margin-top: 3px;
  margin-left: 4px;
}

.tooltip {
  position: absolute;
  display: inline-block;
}
.tooltip .tooltiptext {
  visibility: hidden;
  width: 165px;
  background-color: #433d3d;
  color: #fff;
  font-size: 14px;
  font-weight: 300;
  text-align: center;
  border-radius: 8px;
  padding-top: 8px;
  padding-bottom: 10px;
  position: absolute;
  z-index: 1;
  margin: 21px;
  bottom: 10%;
  left: 50%;
  margin-left: 18px;
  opacity: 0;
  box-shadow: 0 0 20px 0 rgba(0, 0, 0, 0.2);
  transition: opacity 0.4s;
}
.tooltip .tooltiptext::after {
  content: "";
  position: absolute;
  top: 100%;
  left: 45%;
  margin-left: 0px;
  border-width: 6px;
  border-style: solid;
  border-color: #433d3d transparent transparent transparent;
}
.tooltip .tooltiptext {
  visibility: visible;
  opacity: 1;
}
</style>
