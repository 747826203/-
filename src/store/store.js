import Vue from 'vue'
import Vuex from 'vuex'
Vue.use(Vuex)
export default new Vuex.Store({ 
    state: {
        goodList: [],
        which: 0,
        cartInfos: {
            total_price: 0,
            total_nums: 0
        },
        cart_list: [],
        isLogin: false
    },
    
    mutations: {
        addToCart (state,shop) {
            state.total_nums++
            state.cart_list.push(shop)
        },
        remove: state => state.total_nums++,
        signin: state => state.isLogin = true,
        signout: state => state.isLogin = false,
        
        obtain (state, data) {
            state.goodList = data
        },
        which (state, data) {
            state.which = data
        }
    },

    actions: {
        addToCart: ({ commit }) => {commit(mutations.addToCart)},
        remove: ({ commit }) => {commit(mutations.remove)},
        signin: ({ commit }) => {commit(mutations.signin)},
        signout: ({ commit }) => {commit(mutations.signout)},
    }

})
