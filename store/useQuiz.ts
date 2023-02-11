import { defineStore } from 'pinia'
import { axiosInstance } from '@/axios.config'

export const useQuiz = defineStore('quiz', {
    state: () => ({
        allQuiz: [],
    }),

    actions: {
        async getAllQuiz() {
            const res = await axiosInstance.get('/quizzes/all')
            try {
                this.allQuiz = await res.data.data.data
            } catch { }
        },

    },
})