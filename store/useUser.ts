import { defineStore } from 'pinia'
import { axiosInstance } from '@/axios.config'

export const useUser = defineStore('user', {
    state: () => ({
        user: [],
    }),

    actions: {
        async getUser() {
            const res = await axiosInstance.get('/users/current')
            try {
                this.user = await res.data
            } catch { }
        },

    },
})