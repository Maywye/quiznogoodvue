<template>
    <div class="col-start-7 col-span-5 row-start-1 row-span-2 bg-[#F9F4F5] m-12 mr-0 p-10 rounded-lg">
            <span>
                <p class="text-xl">Modifier le mot de passe</p>
                <form class="grid grid-cols-1 place-content-around mt-6 mb-24 mx-24">
                    <label for="Pseudo" class="ml-4 text-lg text-[#502F4C] font-medium pt-8">Nouveau mot de passe</label>
                    <input type="password" name="Pseudo" id="pseudo" class="rounded-lg px-2 py-3 bg-[#C8B8DB] outline-[#502F4C] w-full mb-5">
                    <label for="mdp" class="ml-4 text-lg text-[#502F4C] font-medium pt-7">Confirmation du mot de passe</label>
                    <input type="password" name="mdp" id="mdp" class="rounded-lg px-2 py-3 bg-[#C8B8DB] outline-[#502F4C] w-full mb-5">
                    <button type="submit" class="block py-2 pr-4 pl-3 text-lg text-[#F9F4F5] bg-[#502F4C] rounded-lg mt-12">Valider</button>
                </form>
            </span>
            <span class="grid grid-cols-1 pt-14">
                <a href="#" class="text-xl ">Statistiques</a>
                <a href="#" class="text-xl">Supprimer le compte =(</a>
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