<template>
    <div class="overflow-y-auto grid grid-cols-12">
        <QuestionsModal class="absolute top-0 left-0 w-full " :pseudo="pseudo" />
        <div class="col-start-2 col-span-10 bg-[#F9F4F5] my-6 p-16 rounded-lg place-self-center md:col-span-5 md:col-span-6 md:m-10 md:p-20 ">
            <h2 class="text-center text-xl p-1 md:text-5xlB">Partie rapide</h2>
            <p class="text-center text-sm md:p-1 sourceCode mb-6 md:mb-10 md:text-md">(sans connexion)</p>
            <form class="grid place-items-center">
                <input v-model="pseudo" class="rounded-lg bg-[#70587C] text-[#F9F4F5] placeholder-[#F9F4F5] text-center text-sm m-1 p-1 md:p-4 " type="text" name="pseudo" id="pseudo" placeholder="Saisissez votre pseudo">
                <button @click.prevent="toogleModalFS" 
                    class="rounded-lg p-2 my-3 bg-[#502F4C] text-[#F9F4F5] text-2xl mt-8 md:mt-20 md:py-8 md:p-14 " id="jouer-2">
                    <i class="fa-solid fa-play"></i>&emsp; Jouer
                </button>
            </form>
        </div>
        <BestQuizzer />
    </div>

</template>
<script>
import { mapGetters } from 'vuex';
import BestQuizzer from '../components/BestQuizzer.vue';
import QuestionsModal from '../components/QuestionsModal.vue';
export default {
    name: 'TheHome',
    components: {
        BestQuizzer,
        QuestionsModal
    },
    data() {
        return {
            modalOpen: false,
            pseudo: ''
        }
    },
    methods:{
        toogleModalFS() {
        this.$store.commit('TOGGLE_MODAL')
      },
    },
    computed : {
        ...mapGetters(["getCurrentUser"])
    },
    mounted() {
        if (this.getCurrentUser) {
            this.pseudo = this.getCurrentUser.pseudo
        }
    }
}

</script>
<style>
    
</style>