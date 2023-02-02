import { defineStore } from 'pinia'
import { axiosInstance } from '@/axios.config'

export const useAuth = defineStore('auth', {
    state: () => ({
        loggedIn: localStorage.getItem("access_token") ? true : false,
        loginErrorMessage: {} as string,
        loginErrorErrorsEmail: {} as string,
        loginErrorErrorsPassword: {} as string,
        user: [],
        fastTwo: [],
        access_token: []
    }),

    actions: {
        async loginUser(email: string, password: string) {
            this.loading = true
            try {
                const res = await axiosInstance.post('/login', {email, password})
                this.access_token = await res.data.access_token
                localStorage.setItem("access_token", this.access_token)
                await useRouter().push('/dashboard')
                window.location.reload();
                this.loading = false
            } catch (error) {
                this.loginErrorErrorsEmail =  error.response.data.errors.email
                this.loginErrorErrorsPassword =  error.response.data.errors.password
                this.loginErrorMessage =  error.response.data.message
            }
        },

        async getUser() {
            const res = await axiosInstance.get('/users/current')
            try {
                this.user = await res.data
            } catch { }
        },
        async getFastTwo() {
            const res = await axiosInstance.get('/quizzes/fast-two', {
            })
            try {
                this.fastTwo = await res.data
            } catch (e) {
                console.error(e)
            }
        },
        async logout() {
            // localStorage.revomeItem("access_token", this.access_token)
            await useRouter().push('/login')
            localStorage.clear()
            this.$reset();
            window.location.reload();
            this.loggedIn = false;
        },
    },
})