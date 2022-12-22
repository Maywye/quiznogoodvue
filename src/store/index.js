
import Vue from 'vue'; 
import VueX from 'vuex';
import router from '@/router';
import axios from 'axios';

Vue.use(VueX)



const state = {
    modalOpen: false,
    users: [],
    currentUser : null,
    token: null,
    avatar: "",
    np:''
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
        getUsers(state){
            return state.users
        }
    },
    mutations: {
        TOGGLE_MODAL(state){
            state.modalOpen = !state.modalOpen
        },
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
        },
        CHANGE_NP(state, np){
            state.np = np
        },
        RESET_USERS(state){
            state.users = []
        },
        GET_USERS(state, x){
            state.users.push(x)
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
                alert("Connexion réussie !")
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
            await axios.patch(process.env.VUE_APP_API_URL + "users/" + localStorage.getItem('userId'),{"avatar": state.currentUser.avatar})
            .catch((e) => {
                console.error(e)
            }) //-- fin du catch
        }, // fin de la fonction
        async changePassword({commit}, newPassword){
            commit("CHANGE_NP", newPassword)
            await axios.patch(process.env.VUE_APP_API_URL + "users/" + localStorage.getItem('userId'),{"password": state.np})
            .catch((e) => {
                console.error(e)
            })
        },
        async deleteUser({dispatch}){
            await axios.delete(process.env.VUE_APP_API_URL + "users/" + localStorage.getItem('userId'))
            .then(() => dispatch("logoutStore"))
            .catch((e) => {
                console.error(e)
            })
        },
        async getFourUsers({commit}){
            commit("RESET_USERS")
            await axios.get(process.env.VUE_APP_API_URL + "users/" )
            .then((res) => {
                for (let index = 0; index < 4; index++) {
                    commit("GET_USERS", res.data[index])
                }
                
            })
            .catch(e => console.log(e))
        }
    } //-- fin des actions
}) //-- fin du store
 
export default store
