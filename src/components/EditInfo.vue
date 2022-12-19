<template>
    <div class="col-start-2 col-span-10 bg-[#F9F4F5] m-6 p-10 rounded-lg md:col-start-7 lg:col-span-5 md:row-start-1 md:row-span-2 lg:m-12">
            <span>
                <p class="text-md md:text-2xl">Modifier le mot de passe</p>
                <form class="grid grid-cols-1 place-content-around md:mt-6 md:mb-24 md:mx-24">
                    <label for="Pseudo" class="ml-4 text-sm text-[#502F4C] font-medium pt-8 md:text-lg">Nouveau mot de passe</label>
                    <input type="password" name="Pseudo" id="pseudo" class="rounded-lg px-2 py-1.5 bg-[#C8B8DB] outline-[#502F4C] w-full lg:mb-5 md:py-3">
                    <label for="mdp" class="ml-4 text-sm text-[#502F4C] font-medium pt-8 md:text-lg">Confirmation mot de passe</label>
                    <input type="password" name="mdp" id="mdp" class="rounded-lg px-2 py-1.5 bg-[#C8B8DB] outline-[#502F4C] w-full lg:mb-5 md:py-3">
                    <button type="submit" class="block text-md py-2 pr-4 pl-3 text-[#F9F4F5] bg-[#502F4C] rounded-lg mt-12 md:text-lg">Valider</button>
                </form>
            </span>
            <span class="grid grid-cols-1 pt-14">
                <a href="#" class="md:text-2xl ">Statistiques</a>
                <a href="#" class="md:text-2xl">Supprimer le compte =(</a>
            </span>
    </div>
</template>
<script>
export default {
    name: 'EditInfo'
}
</script>
<style>   
</style>