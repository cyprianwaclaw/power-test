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
        newQuestionId:{} as any,
        new:{} as string,
    }),
    actions: {
        async getFastTwo() {
            try {
                const res = await axiosInstance.get('/quizzes/fast-two')
                this.fastTwo = await res
            } catch (e) {
                console.error(e)
            }
        },
        async getAllQuiz() {
            try {
                const res = await axiosInstance.get('/quizzes')
                this.allQuiz = await res.data.data.data
            } catch (e) {
                console.error(e)
            }
        },
        async getCategory() {
            const res = await axiosInstance.get('/categories')
            try {
                this.categories = await res.data.data
            } catch (e) {
                console.error(e)
            }
        },
        async getSingleQuiz(id: any) {
            try {
                const res = await axiosInstance.get(`/quizzes/${id}`)
                this.singleQuiz = await res.data.data
            } catch (e) {
                console.error(e)
            }
        },

        //! granie w quizy 
        async startingQuiz(id: any) {
            try {
                const res = await axiosInstance.get(`/quiz/${id}/start`)
                this.startQuiz = await res.data.data
            } catch (e) {
                console.error(e)
            }
        },
        async postAnswerNextQuestion(quiz_submission: any, question_id: any, answer_id: any) {
            try {
                const res = await axiosInstance.post(`/quiz/submission/${quiz_submission}/answerQuestion`, 
                { question_id, answer_id })
                this.nextQuestion = await res.data
            } catch (e) {
                console.error(e)
            }
        },
        async getNextQuestion(quiz_submission: any) {
            try {
                const res = await axiosInstance.get(`/quiz/submission/${quiz_submission}/getNextQuestion`)
                this.getNextQuestion = await res.data
            } catch (e) {
                console.error(e)
            }
        },

        //! odpowiedzi i pytanie do pojedyńczego quizu 
        async correctAnswerId(id_question: any) {
            try {
                const res = await axiosInstance.get(`/questions/${id_question}`)
                this.correctAnswer = await res.data.data
            } catch (e) {
                console.error(e)
            }
        },
        async cAnswer(question: any) {
            try {
                const res = await axiosInstance.get(`/questions/${question}/answers `)
                this.answer = await res.data.data
            } catch (e) {
                console.error(e)
            }
        },

        //! dodawanie nowego quizu 
        async postNewQuiz(title:string, time:number, category_id:number, difficulty:string, image:any) {
            try {
                const res = await axiosInstance.post('/quizzes',{title, time, category_id, difficulty, image})
                this.newQuizId = await res.data.data.id
            } catch (e) {
                console.error(e)
            }
        },
        async postNewQuestion(question:any, quiz_id:number) {
            try {
                const res = await axiosInstance.post('/questions',{question, quiz_id})
                this.newQuestionId = await res.data.data.id
            } catch (e) {
                console.error(e)
            }
        },
        async postNewAnswer(answer:any, question_id:any, correct:boolean) {
            try {
                const res = await axiosInstance.post('/answers',{answer, question_id, correct})
                this.new = await res.data
            } catch (e) {
                console.error(e)
            }
        }
    }

})