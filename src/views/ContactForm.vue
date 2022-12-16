<template>
    <div>
        <main class="justify-center items-center bg-[#F9F4F5] border-gray-200 mx-10 my-6 md:my-20 md:mx-40 rounded-lg">
        <h2 class="text-3xl text-center py-8 md:text-5xl">Contact</h2>
        <div>
            <p class="text-sm italic font-medium text-center md:text-xl">Est-ce <span class="font-black">vraiment</span> nécessaire ?</p>
        </div>
        <div class="flex justify-center">
            <img class="content-center" src="../assets/img/iznogoud.png" alt="iznogoud face"> 
        </div>
        
        <div class="flex flex-col items-center justify-center">
            <form class="p-2 m-2 md:p-8 md:m-5 ">
                <div class="mb-5 md:grid md:grid-cols-2">
                    <label for="pseudo" class="ml-4 text-lg text-[#502F4C] font-medium w-full">Pseudo</label>
                    <input type="text" name="pseudo" id="pseudo" class="rounded-lg px-2 py-3 mb-4 bg-[#C8B8DB] outline-[#502F4C] w-full">
                    <label for="mail" class="ml-4 text-lg text-[#502F4C] font-medium w-full">Adresse mail</label>
                    <input type="mail" name="mail" id="mail" class="rounded-lg px-2 py-3 bg-[#C8B8DB] outline-[#502F4C] w-full">
                </div>
                <div class="mb-5">
                    <label for="msg" class="ml-4 text-lg text-[#502F4C] font-medium">Message</label>
                    <textarea name="msg" id="msg" cols="100" rows="10" class="rounded-lg mt-4 p-4 bg-[#C8B8DB] outline-[#502F4C] resize-none w-full placeholder-[#F9F4F5] italic" placeholder="Vraiment, c'est pas la peine d'écrire là dedans, de toute façon c'est pas comme si on allait lire ce message"></textarea>
                </div>
                <div>
                    <button type="submit" class="block py-2 pr-4 pl-3 text-lg text-[#F9F4F5] bg-[#502F4C] rounded-lg">Envoyer</button>
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