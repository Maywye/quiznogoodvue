<template>
        <main class="grid grid-cols-12 justify-center h-screen bg-[#F9F4F5] border-gray-200 py-2.5 m-20 rounded-lg">
            <div class="col-start-2 col-span-4">
                <h2 class="text-8xl mx-10 mt-10 py-8 text-[#502F4C]">404</h2>
                <h2 class="text-7xl mx-10 py-8">N<span class="text-[#C8B8DB]">O</span>T F<span class="text-[#C8B8DB]">O</span>UND</h2>
            </div>
            <div class="col-start-7 col-span-9 md:mb-32">
                <img class="content-center" src="../../public/assets/img/NotFound.png" alt="Oups Face"/>
            </div>
            <div class="col-start-2 col-span-10">
                <p class="text-xl font-medium">Puisqu'on est <span class="font-black">sympa</span> on te propose un</p>
            <p class="text-xl font-medium">retour sur la page d'accueil en cliquant <router-link class="italic underline hover:text-[#C8B8DB]" to="/">ici</router-link> !</p>
            </div>
    </main>
</template>
<script>

export default {
    name: 'NotFound'
}
</script>

<style> 
</style>