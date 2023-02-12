import { defineStore } from 'pinia'
import { axiosInstance } from '@/axios.config'

export const useUser = defineStore('user', {
    state: () => ({
        user: [],
        invitationToken: [],
    }),

    actions: {
        async getUser() {
            const res = await axiosInstance.get('/users/current')
            try {
                this.user = await res.data
            } catch { }
        },
        async getInvitatFfionToken() {
            const res = await axiosInstance.get('/user/getInvitationToken')
            try {
                this.invitationToken = await res.data.invitationToken
            } catch { }
         },
    }
})