<template>
       <header >
        <nav class="bg-[#F9F4F5] border-gray-200 py-8 lg:py-2.5 lg:m-0">
            <div class="justify-between items-center lg:flex lg:ml-20 lg:mr-2">
              <router-link to="/"> 
                <img alt="logo" id="logo"  src="../../public/assets/img/logo.png" class="h-6 h-9 m-auto lg:mr-3">
              </router-link>
                    <ul class="flex flex-row rounded-lg justify-center space-x-8 mt-6 md:p-4 lg:mt-0 lg:text-sm lg:font-medium lg:border-0 ">
                      <li>
                        <button @click="toggleModal" class="block py-1 pl-2 text-[#F9F4F5] bg-[#502F4C] rounded-lg md:pr-4 pr-2 md:py-2 md:pl-3 md:text-lg "><i class="fa-solid fa-play"></i>&emsp;Jouer</button>
                      </li>
                      <li>
                        <button class="block text-[#502F4C] bg-[#C8B8DB] rounded-lg py-1 px-2 md:py-2 md:pr-4 md:pl-3 md-1 md:text-lg "><router-link to="/connexion">Se connecter </router-link></button>
                      </li>
                    </ul>
                  </div> <!-- fin div première partie de navbar-->

            <div v-show="modalOpen" class="flex flex-row justify-center pt-5 lg:justify-end lg:ml-20 lg:mr-2">
                    <ul class="flex flex-row rounded-lg space-x-2 lg:space-x-4 lg:mt-0 lg:text-sm lg:font-medium lg:border-0 lg:p-4 lg:mt-1 ">
                        <li>
                            <button class="block text-sm text-[#502F4C] bg-[#F9F4F5] rounded-lg border-2 border-[#502F4C] lg:px-8 px-4 lg:text-lg lg:border-4 "> Partie <br> rapide </button>
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
export default {
    name: "TheHeader.vue",
    data(){
      return{
        modalOpen: false
      }
    },
    methods:{
      toggleModal() {
            this.modalOpen = !this.modalOpen
          }
    }
    
}
</script>

<style>
</style>