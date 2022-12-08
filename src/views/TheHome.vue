<template lang="">
    <div class="flex-1 overflow-y-auto grid grid-cols-12">
        <div class= "col-start-2 col-span-6 bg-[#F9F4F5] m-10 p-20 rounded-lg place-self-center">
            <h2 class="text-5xl text-center sourceCode">Partie rapide</h2>
            <p class="text-center mb-10 sourceCode">(sans connexion)</p>
            <form class="grid place-items-center">
                <input class="rounded-lg p-5 bg-[#70587C] text-[#F9F4F5] placeholder-[#F9F4F5] text-center" type="text" name="pseudo" id="pseudo" placeholder="Saisissez votre pseudo">
                <button class="rounded-lg mt-20 py-8  pl-12 pr-28 bg-[#502F4C] text-[#F9F4F5] text-2xl " id="jouer-2"><i class="fa-solid fa-play"></i>     &emsp; Jouer</button>
            </form>
        </div>
        <BestQuizzer />
    </div>

</template>

<script>
export default {
    name: 'TheHome'
}
</script>
<style lang="">
    
</style>