import { defineStore } from 'pinia'
// import { FastTwo, CategoryState, Category } from '@/api/types'
import { axiosInstance } from '@/axios.config'

export const useQuiz = defineStore('quiz', {

    state: () => ({
        fastTwo: [],
        allQuiz: [],
        categories: [],
        singleQuiz: null,
        startQuiz: null,
        correctAnswer: [],
        answer: null,
        nextQuestion: [],
        getNextQuestionTest: null,
        newQuizId:{} as number,
        newQuestionId:{} as number,
    }),
    actions: {
        async getFastTwo() {
            const res = await axiosInstance.get('/quizzes/fast-two', {
            })
            try {
                this.fastTwo = await res
            } catch (e) {
                console.error(e)
            }
        },
        async getAllQuiz() {
            const res = await axiosInstance.get('/quizzes')
            try {
                this.allQuiz = await res.data.data.data
            } catch (e) {
                console.error(e)
            }
        },
        async getCategory() {
            const res = await axiosInstance.get('/categories', {
            })
            try {
                this.categories = await res.data.data
            } catch (e) {
                console.error(e)
            }
        },
        async getSingleQuiz(id: any) {
            const res = await axiosInstance.get(`/quizzes/${id}`)
            try {
                this.singleQuiz = await res.data.data
            } catch (e) {
                console.error(e)
            }
        },

        //! granie w quizy 
        async startingQuiz(id: any) {
            const res = await axiosInstance.get(`/quiz/${id}/start`)
            try {
                this.startQuiz = await res.data.data
            } catch (e) {
                console.error(e)
            }
        },
        async postAnswerNextQuestion(quiz_submission: any, question_id: any, answer_id: any) {
            const res = await axiosInstance.post(`/quiz/submission/${quiz_submission}/answerQuestion`, 
            { question_id, answer_id })
            try {
                this.nextQuestion = await res.data
            } catch (e) {
                console.error(e)
            }
        },
        async getNextQuestion(quiz_submission: any) {
            const res = await axiosInstance.get(`/quiz/submission/${quiz_submission}/getNextQuestion`)
            try {
                this.getNextQuestion = await res.data
            } catch (e) {
                console.error(e)
            }
        },

        //! odpowiedzi i pytanie do pojedyńczego quizu 
        async correctAnswerId(id_question: any) {
            const res = await axiosInstance.get(`/questions/${id_question}`)
            try {
                this.correctAnswer = await res.data.data
            } catch (e) {
                console.error(e)
            }
        },
        async cAnswer(question: any) {
            const res = await axiosInstance.get(`/questions/${question}/answers `)
            try {
                this.answer = await res.data.data
            } catch (e) {
                console.error(e)
            }
        },

        //! dodawanie nowego quizu 
        async postNewQuiz(title:string, time:number, category_id:number, difficulty:string) {
            const res = await axiosInstance.post('/quizzes',{title, time, category_id, difficulty})
            try {
                this.newQuizId = await res.data.data.id
            } catch (e) {
                console.error(e)
            }
        },
        async postNewQuestion(question:any, quiz_id:number) {
            const res = await axiosInstance.post('/questions',{question, quiz_id})
            try {
                this.newQuestionId = await res.data.data.id
            } catch (e) {
                console.error(e)
            }
        }
    }

})