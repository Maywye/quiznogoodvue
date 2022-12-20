
import Vue from 'vue'; 
import VueX from 'vuex';
import router from '@/router';
import axios from 'axios';

Vue.use(VueX)



const state = {
    modalOpen: false,
    user: {},
    currentUser : null,
    token: null,
    avatar: ""
}

// Create a new store instance.
const store = new VueX.Store({

    state,
    getters:{
        shareMO(state){
            return state.modalOpen
        },
        getCurrentUser(state){
            return state.currentUser
        },
        getUser(state){
            return state.user
        }
    },
    mutations: {
        TOGGLE_MODAL(state){
            state.modalOpen = !state.modalOpen
        },
        // LOGIN (state){
        //     state.loggedIn = true
        // },
        SET_CURRENT_USER(state, res){
            state.currentUser = res
        },
        REMOVE_CURRENT_USER(state){
            state.currentUser = null
        },
        SET_TOKEN(state, token){
            state.token = token
        },
        REMOVE_TOKEN(state) {
            state.token = null
        },
        SET_AVATAR(state, avatarSrc) {
            state.currentUser.avatar = avatarSrc
            console.log(state.currentUser)
        }
      },



    actions: {
        toggleModal({commit}, modalOpen){
            commit("TOGGLE_MODAL", modalOpen)
        },
        async loginStore({commit}, credentials) {
            await axios.post(process.env.VUE_APP_API_URL + "login", credentials)
            .then((res) => {
                commit("SET_CURRENT_USER", res.data.user)
                commit("SET_TOKEN", res.data.accessToken)
                localStorage.setItem("userId", res.data.user.id)
                // commit("LOGIN")
                alert("Connection réussie !")
                router.push({path:'profile'})
            }).catch((e) => {
                console.error(e)
                alert("Le mail et/ou le mot de passe saisis sont incorrects")})
        },
        logoutStore({commit}) {
           commit("REMOVE_CURRENT_USER")
           commit("REMOVE_TOKEN")
           localStorage.removeItem("userId")
           router.push("/")
        },
        async storeCurrent ({commit}) {
            await axios.get(process.env.VUE_APP_API_URL + "users/" + localStorage.getItem('userId'))
            .then((res) => {
                commit("SET_CURRENT_USER", res.data)
            }).catch((e) => {
                console.error(e)
           })
          },
          async setAvatar ({commit}, avatarSrc) {
            commit("SET_AVATAR", avatarSrc)
            await axios.put(process.env.VUE_APP_API_URL + "users/" + localStorage.getItem('userId'), state.currentUser)
            .then((res) => {
                console.log(res)
            }).catch((e) => {
                console.error(e)
            }) //-- fin du catch
        } // fin de la fonction
    } //-- fin des actions
}) //-- fin du store
 
export default store
