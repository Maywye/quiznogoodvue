<template lang="">
    <div>
        <main class="justify-center items-center bg-[#F9F4F5] border-gray-200 my-20 mx-40 rounded-lg">
        <h2 class="text-5xl text-center py-8">Contact</h2>
        <div>
            <p class="text-xl italic font-medium text-center">Est-ce <span class="font-black">vraiment</span> nécessaire ?</p>
        </div>
        <div class="flex justify-center">
            <img class="content-center" src="../assets/img/iznogoud.png" alt="iznogoud face"> 
        </div>
        
        <div class="flex flex-col items-center justify-center">
            <form class="p-8 m-5 ">
                <div class="mb-5 grid grid-cols-2">
                    <label for="pseudo" class="ml-4 text-lg text-[#502F4C] font-medium">Pseudo</label>
                    <label for="mail" class="ml-4 text-lg text-[#502F4C] font-medium">Adresse mail</label>
                    <input type="text" name="pseudo" id="pseudo" class="rounded-lg px-2 py-3 bg-[#C8B8DB] outline-[#502F4C] mr-8">
                    <input type="mail" name="mail" id="mail" class="rounded-lg px-2 py-3 bg-[#C8B8DB] outline-[#502F4C] ml-8">
                </div>
                <div class="mb-5">
                    <label for="msg" class="ml-4 text-lg text-[#502F4C] font-medium">Message</label>
                    <textarea name="msg" id="msg" cols="100" rows="10" class="rounded-lg p-2 bg-[#C8B8DB] outline-[#502F4C] resize-none w-full placeholder-[#F9F4F5] italic" placeholder="Vraiment, c'est pas la peine d'écrire là dedans, de toute façon c'est pas comme si on allait lire ce message"></textarea>
                </div>
                <div>
                    <button type="submit" class="block py-2 pr-4 pl-3 text-lg text-[#F9F4F5] bg-[#502F4C] rounded-lg">Envoyez</button>
                </div>
            </form>
        </div>
    </main>
    </div>
</template>
<script>
export default {
    name: 'ContactForm'
}
</script>
<style>
    
</style>