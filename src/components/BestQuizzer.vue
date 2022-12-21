<template>
    <div class="col-start-2 col-span-10 bg-[#F9F4F5] my-6 p-5 rounded-lg md:col-start-7 lg:col-start-8 lg:col-span- md:m-10 md:p-10">
            <h2 @click="get" class="text-center text-lg md:text-2xl">Meilleur quizzer</h2>
            <div class="grid grid-cols-1 mt-8 overflow-hidden">

                <div v-for="user in getUsers" :key="user.id" class="grid grid-cols-1 md:grid-cols-3 md:my-4">
                    <img :src="user.avatar" :alt="'avatar de ' + user.pseudo" class="mx-auto md:col-start-1 rounded-full bg-[#C8B8DB] border-2 border-[#502F4C] w-20 h-20 my-2 cursor-pointer md:m-2"/>
                    <p class="my-auto text-center sourceCodeB py-5 md:col-start-2 lg:text-left md:col-span-2 md:text-lg">{{user.pseudo}}</p>
                </div>
            </div>
    </div>
</template>
<script>
import { mapActions, mapGetters } from 'vuex';

export default {
    name: 'BestQuizzer',
    data(){
        return{}
    },
    methods:{
        ...mapActions(["getFourUsers"]),
        get(){
            this.getFourUsers()
        }
    },
    computed:{
        ...mapGetters(['getUsers'])

    },
    mounted(){
        this.get()
    }
}
</script>
<style>
    
</style>