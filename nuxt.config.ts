// https://v3.nuxtjs.org/api/configuration/nuxt.config
export default defineNuxtConfig({
    transpile: ['gsap'],
    modules: ['@pinia/nuxt', '@nuxtjs/tailwindcss', 'nuxt-icon'],
    css: ['@/assets/style/tailwind.css', '@/assets/style/style.scss'],
    ssr: false,
})
