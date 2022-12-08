<template>
    <div class="col-start-7 col-span-5 bg-[#F9F4F5] my-12 ml-16 mr-0 p-10 rounded-lg">
            <h2 class="text-5xl text-center">Inscription</h2>
            <form class="grid grid-cols-1 place-content-around my-12 mx-24">
                <label for="Pseudo" class="ml-4 text-lg text-[#502F4C] font-medium">Pseudo <span class="text-sm hover:text-base">( Choisi bien, tu ne pourras pas le modifier )</span></label>
                <input type="text" name="Pseudo" id="pseudo" class="rounded-lg px-2 py-3 bg-[#C8B8DB] outline-[#502F4C] w-full mb-5">
                <label for="mail" class="ml-4 text-lg text-[#502F4C] font-medium">Adresse Email</label>
                <input type="email" name="mail" id="mail" class="rounded-lg px-2 py-3 bg-[#C8B8DB] outline-[#502F4C] w-full mb-5">
                <label for="mdp" class="ml-4 text-lg text-[#502F4C] font-medium">Mot de passe</label>
                <input type="password" name="mdp" id="mdp" class="rounded-lg px-2 py-3 bg-[#C8B8DB] outline-[#502F4C] w-full mb-5">
                <label for="cmdp" class="ml-4 text-lg text-[#502F4C] font-medium">Confirmation du mot de passe</label>
                <input type="password" name="cmdp" id="cmdp" class="rounded-lg px-2 py-3 bg-[#C8B8DB] outline-[#502F4C] w-full mb-5">
                <br>
                <button type="submit" class="block py-2 pr-4 pl-3 text-lg text-[#F9F4F5] bg-[#502F4C] rounded-lg"><router-link to="/profile">S'inscrire</router-link></button>
            </form>
    </div>
</template>
<script>
export default {
    name: 'SignIn'
}
</script>
<style>
    
</style>