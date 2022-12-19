<template>
        <footer class="bottom-0 w-full bg-[#F9F4F5] border-gray-200 md:py-2.5" >
        <div class="justify-between grid grid-cols-1 m-2 md:ml-10 md:mr-10 md:grid-cols-3">
            <div class="block md:text-start text-center content-center">
                <router-link class="hover:text-[#C8B8DB] md:p-2 text-sm" to="contact">A Propos</router-link>
                <span> | </span>
                <router-link class="hover:text-[#C8B8DB] md:p-2 text-sm" to="contact">CGU</router-link>
            </div> 
            <p class="block text-center content-center md:text-xl md:col-start-2 md:p-0 p-4 text-md">Copyright - QuizNoGood {{date}}</p>
            <router-link class="block text-center italic underline text-sm hover:text-[#C8B8DB] md:text-end md:p-2" to="contact">Ne pas nous contacter</router-link>
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