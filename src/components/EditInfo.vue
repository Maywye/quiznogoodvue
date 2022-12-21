<template>
    <div class="col-start-2 col-span-10 bg-[#F9F4F5] rounded-lg m-6 p-6 md:p-5 lg:row-start-1 lg:row-span-2 lg:col-start-8 lg:col-span-6 lg:m-12">
            <span>
                <p class="text-md md:text-2xl">Modifier le mot de passe</p>
                <form @submit.prevent="changePasswordCheck" class="grid grid-cols-1 place-content-around md:mt-6 md:mb-24 md:mx-12">
                    <label for="Pseudo" class="ml-4 text-sm text-[#502F4C] font-medium pt-8 md:text-lg">Nouveau mot de passe</label>
                    <input v-model="newPassword" type="password" name="password" id="password" class="rounded-lg px-2 py-1.5 bg-[#C8B8DB] outline-[#502F4C] w-full lg:mb-5 md:py-3">
                    <label for="mdp" class="ml-4 text-sm text-[#502F4C] font-medium pt-8 md:text-lg">Confirmation mot de passe</label>
                    <input v-model="newPasswordConf" type="password" name="passwordconf" id="passwordconf" class="rounded-lg px-2 py-1.5 bg-[#C8B8DB] outline-[#502F4C] w-full lg:mb-5 md:py-3">
                    <button type="submit" class="block text-md py-2 pr-4 pl-3 text-[#F9F4F5] bg-[#502F4C] rounded-lg mt-12 md:text-lg">Valider</button>
                </form>
            </span>
            <span class="grid grid-cols-1 pt-14">
                <a href="#" class="md:text-2xl ">Statistiques</a>
                <a @click="delPswrd" href="#" class="md:text-2xl">Supprimer le compte =(</a>
            </span>
    </div>
</template>
<script>
import { mapActions } from 'vuex'
import router from '@/router'
export default {
    name: 'EditInfo',
    data(){
        return{
            newPassword: '',
            newPasswordConf: '',
            RUSure: false
        }
    },
    methods:{
        ...mapActions(['changePassword', 'deleteUser']),
        changePasswordCheck(){
            if(this.newPassword == this.newPasswordConf && this.newPassword != ''){
                this.changePassword(this.newPassword)
                alert("Votre mot de passe a bien été modifié")
                this.newPassword = ""
                this.newPasswordConf = ""
            }else{
                alert('le mot de passe est vide ou les deux champs ne sont pas similaires')
            }
        },
        delPswrd(){
            this.RUSure = confirm("Êtes-vous sûr et CERTAIN de vouloir supprimer votre compte ? On ne pourra pas le repêcher ...")
            if (this.RUSure) {
                this.deleteUser()
                router.push('/')
            }
        }
    }
}
</script>
<style>   
</style>