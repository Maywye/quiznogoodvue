<template>
    <div class= "col-start-2 col-span-5 bg-[#F9F4F5] my-12 mr-16 ml-0 p-10 rounded-lg ">
            <h2 class="text-5xl text-center">Connexion</h2>
            <p class="text-sm text-center sourceCode">Afin de profiter d'un large choix de quizz</p>
            <form class="grid grid-cols-1 place-content-around my-12 mx-24">
                <label for="Pseudo" class="ml-4 text-lg text-[#502F4C] font-medium pt-8">Pseudo</label>
                <input type="text" name="Pseudo" id="pseudo" class="rounded-lg px-2 py-3 bg-[#C8B8DB] outline-[#502F4C] w-full mb-5">
                <label for="mdp" class="ml-4 text-lg text-[#502F4C] font-medium pt-7">Mot de passe</label>
                <input type="password" name="mdp" id="mdp" class="rounded-lg px-2 py-3 bg-[#C8B8DB] outline-[#502F4C] w-full mb-5">
                <button type="submit" class="block py-2 pr-4 pl-3 text-lg text-[#F9F4F5] bg-[#502F4C] rounded-lg mt-12"><router-link to="/">Se connecter </router-link></button>
            </form>

    </div>
</template>
<script>
export default {
    name: 'LogIn'
    
}
</script>
<style>
    
</style>