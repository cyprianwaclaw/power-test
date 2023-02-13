<template>
  <NuxtLayout name="panel">
    <!-- gdy nie ma jeszcze danych z api  -->
    <h1 class="title-h1">Ustawienia</h1>
    <div class="white-retangle mt-8">
      <div class="row-table-start">
        <NuxtLink to="/panel/ustawienia/dane-personalne">
        <div class="columns-2 flex -ml-1 mb-1 -mt-2 place-items-center justify-between">
          <div class="flex place-items-center gap-4">
            <img src="@/assets/file/photo1.jpg" class="image-hero" />
            <div>
              <p class="text-name">{{ personal.name }} {{personal.surname }}</p>
              <p class="text-email text-gray">{{ personal.email }}</p>
            </div>
          </div>
          <div>
            <Icon name="ph:caret-right-bold" size="20" class="text-gray" />
          </div>
        </div>
      </NuxtLink>
      </div>
      <div class="ml-6 mr-9 mt-6 mb-4">
        <p class="text">
          Aktualnie posiadasz pakiet Standard, przejdź na
          <NuxtLink to="/panel/premium"><span class="navigate"> PREMIUM </span></NuxtLink
          >i zyskaj dodatkowe funkcję
        </p>
        <button class="button-primary mt-6 mb-1">
          Przejdź na PREMIUM <Icon name="carbon:chevron-right" class="-mr-2" size="24" />
        </button>
      </div>
    </div>
    <div class="mt-14">
      <h2 class="title-h2 mb-7">Dane do faktury</h2>
      <div class="white-retangle">
        <NuxtLink to="/panel/ustawienia">
          <div class="row-table-start -mt-4 flex place-items-center justify-between">
            <div class="">
              <p class="text-des-mobile">Nazwa działalności</p>
              <h2 class="title-menu-mobile">{{ company.name }}</h2>
            </div>
            <Icon name="ph:caret-right-bold" size="20" class="text-gray" />
          </div>
        </NuxtLink>
        <NuxtLink to="/panel/ustawienia">
          <div class="row-table-start flex place-items-center justify-between">
            <div class="">
              <p class="text-des-mobile">NIP</p>
              <h2 class="title-menu-mobile">{{ company.nip }}</h2>
            </div>
            <Icon name="ph:caret-right-bold" size="20" class="text-gray" />
          </div>
        </NuxtLink>
        <NuxtLink to="/panel/ustawienia">
          <div class="row-table-start flex place-items-center justify-between">
            <div class="">
              <p class="text-des-mobile">REGON</p>
              <h2 class="title-menu-mobile">{{ company.regon }}</h2>
            </div>
            <Icon name="ph:caret-right-bold" size="20" class="text-gray" />
          </div>
        </NuxtLink>
        <NuxtLink to="/panel/wiadomosc">
          <div class="row-table-end flex place-items-center justify-between">
            <div class="flex place-items-center">
              <h2 class="title-menu-mobile">Siedziba działalności</h2>
            </div>
            <Icon name="ph:caret-right-bold" size="20" class="text-gray" />
          </div>
        </NuxtLink>
      </div>
    </div>
    <div class="mt-14">
      <h2 class="title-h2 mb-7">Wypłata środków</h2>
      <div class="white-retangle">
        <NuxtLink to="/panel/ustawienia">
          <div class="row-table-start -mt-4 flex place-items-center justify-between">
            <div class="">
              <p class="text-des-mobile">Numer iban</p>
              <h2 class="text-sm font-semibold">{{ financial.iban }}</h2>
            </div>
            <Icon name="ph:caret-right-bold" size="20" class="text-gray" />
          </div>
        </NuxtLink>
        <NuxtLink to="/panel/ustawienia">
          <div class="row-table-start flex place-items-center justify-between">
            <div class="">
              <p class="text-des-mobile">Nazwa banku</p>
              <h2 class="title-menu-mobile">{{ financial.bank_name }}</h2>
            </div>
            <Icon name="ph:caret-right-bold" size="20" class="text-gray" />
          </div>
        </NuxtLink>
        <NuxtLink to="/panel/ustawienia">
          <div class="row-table-end flex place-items-center justify-between">
            <div class="">
              <p class="text-des-mobile">Kod Swift</p>
              <h2 class="title-menu-mobile">{{ financial.swift }}</h2>
            </div>
            <Icon name="ph:caret-right-bold" size="20" class="text-gray" />
          </div>
        </NuxtLink>
      </div>
    </div>
    <div class=" flex justify-end mt-14 pb-20">
      <p class="one primary-color">
        <NuxtLink to="/panel/ustawienia"> Regulamin </NuxtLink>
      </p>
      <p class="two primary-color">
        <NuxtLink to="/panel/ustawienia"> Polityka prywatności </NuxtLink>
      </p>
    </div>
  </NuxtLayout>
</template>

<script setup lang="ts">
import { storeToRefs } from "pinia";
import { useUser } from "@/store/useUser";

definePageMeta({
  middleware: "auth",
});

const userStore= useUser();
const { getPersonal, getFinancial, getCompany } = storeToRefs(userStore);

await userStore.getSettingsUser()

let personal = getPersonal.value
let financial = getFinancial.value
let company =  getCompany.value

</script>
<style lang="scss" scoped>
.image-hero {
  width: 55px;
  height: 55px;
  border: 1px solid #ededed;
  border-radius: 9999px;
}
.text-email {
  font-size: 14px;
  font-weight: 400;
  margin-top: -3px;
}
.text-name {
  font-size: 18px;
  font-weight: 500;
}
.one {
  font-weight: 600;
  font-size: 12px;
  line-height: 14px;
  letter-spacing: 0.02em;
  border-right: 1px solid #618CFB;
  margin-right: 11px;
  padding-right: 11px;
}
.two {
  font-weight: 600;
  font-size: 12px;
  line-height: 14px;
  letter-spacing: 0.02em;
}
</style>
