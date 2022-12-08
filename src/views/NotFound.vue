<template>
    <div>
        <main class="justify-center items-center h-screen bg-[#F9F4F5] border-gray-200 py-2.5 m-20 rounded-lg relative">
        <h2 class="text-8xl mx-10 mt-10 py-8 text-[#502F4C]">404</h2>
        <h2 class="text-7xl mx-10 py-8">N<span class="text-[#C8B8DB]">O</span>T F<span class="text-[#C8B8DB]">O</span>UND</h2>
        <div class="flex justify-center">
            <img class="content-center" src="../assets/img/iznogoud.png" alt="iznogoud face"> 
        </div>
        <div class="absolute bottom-0 left-0 m-10">
            <p class="text-xl font-medium">Puisqu'on est <span class="font-black">sympa</span> on te propose un</p>
            <p class="text-xl font-medium">retour sur la page d'accueil en cliquant <router-link class="italic underline hover:text-[#C8B8DB]" to="contact">ici</router-link> !</p>
        </div>
    </main>
    </div>
</template>
<script>

export default {
    name: 'NotFound'
}
</script>

<style> 
</style>