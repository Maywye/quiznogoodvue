<template>
    <div class="bg-[#F9F4F5] rounded-lg col-start-2 col-span-10 md:col-start-7 md:col-span-5 my-12 md:ml-16 md:mr-0 p-10">
            <h2 class="text-center p-3 md:text-5xl">Inscription</h2>
            <form class="grid grid-cols-1 place-content-around md:my-12 md:mx-24">
                <label for="Pseudo" class="ml-4 md:text-lg text-[#502F4C] font-medium">Pseudo <span class="text-sm hover:text-base">( Choisi bien, tu ne pourras pas le modifier )</span></label>
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