import { defineStore } from 'pinia'
// import { FastTwo, CategoryState, Category } from '@/api/types'
import { axiosInstance, axiosData } from '@/axios.config'

export const useQuiz = defineStore('quiz', {

    state: () => ({
        fastTwo: [],
        activeQuiz: [],
        allQuiz: [],
        notActiveQuiz: [],
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
        // deactivateQuiz: [] as any,
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

        // const res = await axiosInstance.get('/quizzes/all?is_activate=0&per_page=56')

        async getActiveQuiz() {
            try {
                const res = await axiosInstance.get('/quizzes?per_page=23')
                this.activeQuiz = await res.data.data.data
            } catch (e) {
                console.error(e)
            }
        },
        async getNotActiveQuiz() {
            try {
                const res = await axiosInstance.get('/quizzes/all?per_page=23')
                this.notActiveQuiz = await res.data.data.data
            } catch (e) {
                console.error(e)
            }
        },
        async getAllQuiz() {
            try {
                const res = await axiosInstance.get('/quizzes/all?per_page=23')
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
        // async getDeactivateQuiz(){
        //     try{
        //         const res = await axiosInstance.get('/quiz/100/deactivate')
        //         this.deactivateQuiz = res.data
        //     }catch(e){
        //         console.log(e)
        //     }
        // },

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
        async postNewQuiz(title:string, time:number, category_id:number, difficulty:string,description: string, image:any) {
            try {
                const res = await axiosData.post('/quizzes',{title, time, category_id, difficulty,description, image})
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