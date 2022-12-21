<template lang="">
    <div  v-if="getCurrentUser" class= "col-start-2 col-span-10 bg-[#F9F4F5] m-6 p-4 rounded-lg lg:m-12 lg:col-span-6">
            <h2 class="text-2xl md:text-5xl">Mon profil</h2>
            <p class="text-md text-center text-[#000000] font-bold mt-10 md:text-2xl">Bonjour {{getCurrentUser.pseudo}} !</p>
            <button @click="logoutStore" class="block px-4 text-sm font-bold text-[#502F4C] rounded-lg border-2 border-[#502F4C] mt-14 ml-auto md:border-4 md:px-8 md:text-lg">Se déconnecter</button>
    </div>
</template>
<script>
import { mapActions, mapGetters } from 'vuex';
export default {
    name: 'HeLLo',
    data(){
        return{

        }
    },
    methods:{
        ...mapActions(['logoutStore']),
    },
    computed : {
        ...mapGetters(["getCurrentUser"])
    }
}
</script>
<style>
    
</style>