import { defineStore } from 'pinia'
import { axiosInstance } from '@/axios.config'

export const useUser = defineStore('user', {
    state: () => ({
        point: {} as number,
        invitationToken: [],
        correctAnswers: {} as number,
        inCorrectAnswers: {} as number,
        invitedUser: [],
        allUser: [],
        invitedCount: {} as number,
    }),

    actions: {
        async getUser() {
            const res = await axiosInstance.get('/users/current')
            try {
                this.point = await res.data.user.points
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
    }
})