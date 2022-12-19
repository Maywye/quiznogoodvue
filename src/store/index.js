
import Vue from 'vue'; 
import VueX from 'vuex';

Vue.use(VueX)


const state = {
    modalOpen: false,
    loggedIn: false,
    user: []
}

// Create a new store instance.
const store = new VueX.Store({

    state,
    getters:{
        shareMO(state){
            return state.modalOpen
        },
        shareLog(state){
            return state.loggedIn
        }
    },
    mutations: {
        TOGGLE_MODAL(state){
            state.modalOpen = !state.modalOpen
        },
        LOG_INV(state){
            state.loggedIn = !state.loggedIn
        }
      },
    actions: {
        toggleModal({commit}, modalOpen){
            commit("TOGGLE_MODAL", modalOpen)
        }
    }

})
 
export default store
