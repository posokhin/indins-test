import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const store = () => new Vuex.Store({
    state: {
        amount: '',
        family: '',
        name: '',
        phone: ''
    },
    getters: {
        getStore(state) {
            return state
        }
    },
    mutations: {
        setAmount(state, data) {
            state.amount = data
        },
        setPersonData(state, data) {
            state.family = data.family
            state.name = data.name
            state.phone = data.phone
        }
    }
})

export default store