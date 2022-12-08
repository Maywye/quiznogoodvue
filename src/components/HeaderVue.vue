<template>
       <header>
        <nav class="bg-[#F9F4F5] border-gray-200  py-2.5 m-0 ">
            <div class=" flex justify-between items-center ml-20 mr-2">
                <a href="#" class="flex items-center">
                    <img alt="logo" id="logo"  src="../assets/logo.png" class="mr-3 h-6 sm:h-9">
                </a>
                    <ul class="flex flex-col p-4 mt-4  rounded-lg border  md:flex-row md:space-x-8 md:mt-0 md:text-sm md:font-medium md:border-0 ">
                      <li>
                        <button @click="toggleModal" class="block py-2 pr-4 pl-3 text-lg text-[#F9F4F5] bg-[#502F4C] rounded-lg"><i class="fa-solid fa-play"></i>     &emsp; Jouer</button>
                      </li>
                      <li>
                        <button class="block py-2 pr-4 pl-3 text-lg text-[#502F4C] bg-[#C8B8DB] rounded-lg">Se connecter</button>
                      </li>
                    </ul>
                  </div> <!-- fin div première partie de navbar-->

            <div v-show="modalOpen" class="flex justify-end ml-20 mr-2">
                    <ul class="flex flex-col p-4 mt-4  rounded-lg border  md:flex-row md:space-x-8 md:mt-0 md:text-sm md:font-medium md:border-0 ">
                        <li>
                            <button class="block px-8 text-lg text-[#502F4C] bg-[#F9F4F5] rounded-lg border-4 border-[#502F4C]"> Partie <br> rapide </button>
                        </li>
                        <li>
                             <button class="block px-8 text-lg font-bold text-[#000000] bg-[#F9F4F5] rounded-lg border-4 border-[#C8B8DB]">Partie <br> custom</button>
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