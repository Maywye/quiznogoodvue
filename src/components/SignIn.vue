<template>
    <div class="bg-[#F9F4F5] rounded-lg col-start-2 col-span-10 lg:col-start-7 lg:col-span-5 my-12 lg:ml-16 lg:mr-0 p-10">
            <h2 class="text-center p-3 md:text-5xl">Inscription</h2>
            <form @submit.prevent="signIn" class="grid grid-cols-1 place-content-around md:my-12 md:mx-24">
                <label for="Pseudo" class="ml-4 md:text-lg text-[#502F4C] font-medium">Pseudo <span class="text-sm hover:text-base">( Choisi bien, tu ne pourras pas le modifier )</span></label>
                <input v-model="pseudo" type="text" name="Pseudo" id="pseudoSignIn" class="rounded-lg px-2 py-3 bg-[#C8B8DB] outline-[#502F4C] w-full mb-5">
                <label for="email" class="ml-4 text-lg text-[#502F4C] font-medium">Adresse Email</label>
                <input v-model="email" type="email" name="email" id="emailSignIn" class="rounded-lg px-2 py-3 bg-[#C8B8DB] outline-[#502F4C] w-full mb-5">
                <label for="mdp" class="ml-4 text-lg text-[#502F4C] font-medium">Mot de passe</label>
                <input v-model="password" type="password" name="mdp" id="mdpSignIn" class="rounded-lg px-2 py-3 bg-[#C8B8DB] outline-[#502F4C] w-full mb-5">
                <label for="cmdp" class="ml-4 text-lg text-[#502F4C] font-medium">Confirmation du mot de passe</label>
                <input v-model="passwordConf" type="password" name="cmdp" id="cmdp" class="rounded-lg px-2 py-3 bg-[#C8B8DB] outline-[#502F4C] w-full mb-5">
                <br>
                <!-- <button type="submit" class="block py-2 pr-4 pl-3 text-lg text-[#F9F4F5] bg-[#502F4C] rounded-lg">S'inscrire</button> -->
                <button type="submit" class="block py-2 pr-4 pl-3 text-lg text-[#F9F4F5] bg-[#502F4C] rounded-lg">S'inscrire</button>
            </form>
    </div>
</template>
<script>
import axios from 'axios';

export default {
    name: 'SignIn',
    data(){
        return{
            pseudo: '',
            email: '',
            password: '',
            passwordConf:'',

            urlApiReg: 'https://json-server-by-vercel.vercel.app/register'
        }
    },
    methods: {
        async signIn(){

            if (this.pseudo.length < 2 || this.pseudo.length >20 ) {
                alert("Votre pseudo doit être compris entre 2 et 20 caractères");
            }else{
                if (this.password != this.passwordConf) {
                    alert("votre mot de passe est différent de votre mot de passe de confirmation ")
                }else{
                    try{
                        await axios.post(this.urlApiReg, {"pseudo": this.pseudo,"email": this.email, "password": this.password, "avatar": "../assets/img/pfp.png"})
                        alert("Votre compte a bien été créé : veuillez vous identifier dans le champ de gauche ;)")
                        this.pseudo=''
                        this.email=''
                        this.password=''
                        this.passwordConf=''

                    }catch(e){
                        console.error(e)
                    }

                }
            }

           
          
        }
    }
}
</script>
<style>
    
</style>