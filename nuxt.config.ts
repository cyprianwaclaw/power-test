// https://v3.nuxtjs.org/api/configuration/nuxt.config
export default defineNuxtConfig({
    modules: ['@pinia/nuxt', '@nuxtjs/tailwindcss'],
    css: ['@/assets/style/tailwind.css', '@/assets/style/style.scss'],
    ssr: false,
})
