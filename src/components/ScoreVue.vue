<template lang="">
    <div v-show="scoreModalOpen" class="flex flex-col h-screen bg-[#502F4C]">
    <div class="bg-[#502F4C] flex-1">
        
        <div class=" flex flex-wrap justify-between items-center ml-20 mr-2">
            <button type="button" class="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm p-1.5 ml-auto inline-flex items-center dark:hover:bg-gray-600 dark:hover:text-white" data-modal-toggle="defaultModal">
                <svg aria-hidden="true" class="w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg>
                <span class="sr-only">Close modal</span>
            </button>
        </div> <!--fin div bouton "x" fermeture modale-->

        <div class=" flex flex-wrap justify-between items-center ml-20 mr-2">
            <a href="#" class="flex items-center">
                <img alt="logo" id="logo"  src="../assets/img/logo.png" class=" mr-3 mt-6 h-9 sm:h-12">
            </a>
            
        </div>

        <h3 class="text-5xl text-center text-[#f4f5f9] py-12">RESULTAT</h3>

        <div class=" grid grid-cols-6 mb-10 h-4/6 mt-5">
            <div class="relative col-start-2 col-span-4 bg-[#f4f5f9] rounded-lg p-12">
                <p class="text-3xl text-center text-[#000000] text-bold font-bold">Vous avez obtenu le score de : </p>

                <p class="text-center text-6xl text-[##502F4C] mt-48"><span class="italic">{{bonnesRep}}/{{totalRep}}</span></p>

                
                <button class="px-12 py-4 bg-[#502F4C] rounded-lg absolute mt-44 right-64"> <span class="text-2xl  text-[#F9F4F5]">Rejouer</span> </button>

                <a href="#" class="underline absolute mt-52 right-12 text-xl"> Détails</a>

              
            </div> <!-- fin div contenant le score-->
            
         </div> <!-- fin div générant les colones-->

    </div>
    </div>
</template>
<script>
export default {
    name: "ScoreVue.vue",
    props: [
    "scoreModalOpen",
    "bonnesRep",
    "totalRep"
    ]
    
}
</script>
<style lang="">
    
</style>