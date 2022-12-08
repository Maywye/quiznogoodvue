<template>
        <footer class="bottom-0 w-full bg-[#F9F4F5] border-gray-200 py-2.5" >
        <div class=" flex flex-wrap justify-between ml-10 mr-10 grid grid-cols-3">
            <div></div>
            <p class="block text-center content-center">        Copyright - QuizNoGood {{date}}        </p>
            <router-link class="block text-end italic underline hover:text-[#C8B8DB]" to="contact">Ne pas nous contacter</router-link>
        </div>
    </footer>
</template>

<script>
export default {
    name: "TheFooter.vue",
    data(){
        return {
            date: new Date().getFullYear()
        }
    }
    
}
</script>

<style> 
footer{
    margin-top: auto;
}
</style>