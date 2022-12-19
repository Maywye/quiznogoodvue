<template>
    <div class= "bg-[#F9F4F5] rounded-lg col-start-2 col-span-10 md:col-start-2 md:col-span-5 my-12 md:mr-16 md:ml-0 p-10">
            <h2 class="text-center p-3 md:text-5xl">Connexion</h2>
            <p class="text-center sourceCode md:text-sm">Afin de profiter d'un large choix de quizz</p>
            <form @submit.prevent="logIn" class="grid grid-cols-1 place-content-around md:my-12 md:mx-24">
                <label for="email" class="ml-4 text-lg text-[#502F4C] font-medium pt-8">Adresse Email</label>
                <input v-model="email" type="email" name="email" id="email" class="rounded-lg px-2 py-3 bg-[#C8B8DB] outline-[#502F4C] w-full mb-5">
                <label for="mdp" class="ml-4 text-lg text-[#502F4C] font-medium pt-7">Mot de passe</label>
                <input v-model="password" type="password" name="mdp" id="mdp" class="rounded-lg px-2 py-3 bg-[#C8B8DB] outline-[#502F4C] w-full mb-5">
                <button type="submit" class="block py-2 pr-4 pl-3 text-lg text-[#F9F4F5] bg-[#502F4C] rounded-lg mt-12">Se connecter</button>
                <!-- <button type="submit" class="block py-2 pr-4 pl-3 text-lg text-[#F9F4F5] bg-[#502F4C] rounded-lg mt-12"><router-link to="/">Se connecter </router-link></button> -->
            </form>
    </div>
</template>
<script>
// import router from '@/router';
import axios from 'axios'
import { mapMutations } from 'vuex';

export default {
    name: 'LogIn',
    data(){
        return{
            email:'',
            password:'',
            currentUser:[],

            urlApiLog: 'http://localhost:3000/login',
            urlApiUsers : 'http://localhost:3000/users'
        }
    },
    methods:{
        ...mapMutations(["LOG_INV"]),

        async logIn(){
            try{
             //   await axios.post(this.urlApiLog, {"email": this.email, "password": this.password})
            //    console.log('bien moginé');
              //  this.LOG_INV()
              //  router.push({path:'profile'})
              const data = {
                email: this.email,
                password : this.password
              }
               await axios.post(this.urlApiLog, data)
               .then(res => console.log(res.data.user) )
            


            }catch(e){
                console.error(e)
            }
            this.email=''
            this.password=''
        }
    },
    computed:{

    }
    
}
</script>
<style>
    
</style>