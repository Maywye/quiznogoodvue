<template>
       <header >
        <nav class="bg-[#F9F4F5] border-gray-200 py-8 lg:py-2.5 lg:m-0">
            <div class="justify-between items-center lg:flex lg:ml-20 lg:mr-2">
              <router-link to="/"> 
                <img alt="logo" id="logo"  src="../../public/assets/img/logo.png" class="h-6 h-9 m-auto lg:mr-3">
              </router-link>
                    <ul class="flex flex-row rounded-lg justify-center space-x-8 mt-6 md:p-4 lg:mt-0 lg:text-sm lg:font-medium lg:border-0 ">
                      <li>
                        <button @click="toggleModalH" class="block py-2 px-2 text-[#F9F4F5] bg-[#502F4C] rounded-lg md:pr-4 md:pl-3 md:text-lg "><i class="fa-solid fa-play"></i>&emsp;Jouer</button>
                      </li>
                      <li>
                        <button v-if="!getCurrentUser"  class="block text-[#502F4C] bg-[#C8B8DB] rounded-lg py-2 px-2 md:py-2 md:pr-4 md:pl-3 md:text-lg "><router-link to="/connexion">Se connecter </router-link></button>
                        <button v-else @click="logoutStore" class="block text-[#502F4C] bg-[#C8B8DB] rounded-lg py-2 px-2 md:py-2 md:pr-4 md:pl-3 md:text-lg hover:text-[#F9F4F5]">Se déconnecter </button>
                      </li>
                      <li v-if="getCurrentUser">
                        <router-link to="profile">
                        <div class="rounded-full border-2 border-[#502F4C] bg-[#C8B8DB] w-10 h-10 md:w-12 md:h-12 overflow-hidden">
                           <img v-if="getCurrentUser.avatar" :src="getCurrentUser.avatar" alt="avatar" title="Mon profil" class="mx-auto"> 
                        </div>
                      </router-link>
                      </li>
                    </ul>
                  </div> <!-- fin div première partie de navbar-->
                  <div v-show="false">{{getCurrentUser}}</div>
            <div v-show="modalOpenH" class="flex flex-row justify-center pt-5 lg:justify-end lg:ml-20 lg:mr-2">
                    <ul class="flex flex-row rounded-lg space-x-2 lg:space-x-4 lg:mt-0 lg:text-sm lg:font-medium lg:border-0 lg:p-4 lg:mt-1 ">
                        <li>
                            <button @click="TOGGLE_MODAL" class="block text-sm text-[#502F4C] bg-[#F9F4F5] rounded-lg border-2 border-[#502F4C] lg:px-8 px-4 lg:text-lg lg:border-4 "> Partie <br> rapide </button>
                        </li>
                        <li>
                             <button :disabled="isDisabled" title="Ce n'est pas implémenté" class="block px-4 text-sm font-bold text-[#000000] bg-[#F9F4F5] rounded-lg border-2 border-[#C8B8DB] cursor-not-allowed lg:px-8 lg:text-lg lg:border-4 opacity-25">Partie <br> custom</button>
                        </li>
                    </ul>
                </div> <!-- fin div deuxième partie de navbar : hidden buttons-->
        </nav>
        <br> <!--  Ligne a supprimer part la suite -->
    </header>
</template>

<script>
import { mapMutations, mapGetters, mapActions} from 'vuex'
export default {
    name: "TheHeader.vue",
    data(){
      return{
        isDisabled: true,
        modalOpenH: false,

        avatarSrc : "assets/img/dil.png"
      }
    },
    methods:{
      toggleModalH() {
            this.modalOpenH = !this.modalOpenH
          },
      // ...mapActions(["toggleModal"]),
      ...mapMutations(["TOGGLE_MODAL"]),
      // toogleModalFS() {
      //   this.$store.commit('TOGGLE_MODAL')
      // }
      ...mapActions(["logoutStore"])
    },
    
    computed:{
      ...mapGetters(["getCurrentUser"])
    }
    
}
</script>

<style>
</style>