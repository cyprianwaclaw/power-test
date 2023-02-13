import { defineStore } from 'pinia'
import { axiosInstance } from '@/axios.config'
import { Financial, Company, Personal, User } from '@/types'

export const useUser = defineStore('user', {
    state: () => ({
        currentUser: {} as User,
        invitationToken: [],
        correctAnswers: {} as number,
        inCorrectAnswers: {} as number,
        invitedUser: [],
        allUser: [],
        invitedCount: {} as number,
        getPersonal: {} as Personal,
        getCompany: {} as Company,
        getFinancial: {} as Financial,
    }),

    actions: {
        async getUser() {
            const res = await axiosInstance.get('/users/current')
            try {
                this.currentUser = await res.data.user
            } catch { }
        },
        async getInvitationToken() {
            const res = await axiosInstance.get('/user/getInvitationToken')
            try {
                this.invitationToken = await res.data.invitationToken
            } catch { }
        },
        async getUserStats() {
            const res = await axiosInstance.get('/user/stats')
            try {
                this.inCorrectAnswers = await res.data.data.incorrect_answers
                this.correctAnswers = await res.data.data.correct_answers
            } catch { }
        },
        async getInvitedUser() {
            const res = await axiosInstance.get('/user/getInvitedUsers')
            try {
                this.allUser = await res.data.data
                this.invitedUser = await res.data.success
                this.invitedCount = await res.data.count
            } catch { }
        },
        async getSettingsUser() {
            const res = await axiosInstance.get('/user/settings')
            try {
                this.getPersonal = await res.data.personal
                this.getFinancial = await res.data.financial
                this.getCompany = await res.data.company
            } catch { }
        },
    }
})