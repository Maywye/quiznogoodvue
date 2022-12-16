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
            <form class="p-8 m-5 " @submit.prevent="sendEmail">
                <div class="mb-5 grid grid-cols-2">
                    <label for="name" class="ml-4 text-lg text-[#502F4C] font-medium">Pseudo</label>
                    <label for="email" class="ml-4 text-lg text-[#502F4C] font-medium">Adresse email</label>
                    <input v-model="name" type="text" name="name" id="name" class="rounded-lg px-2 py-3 bg-[#C8B8DB] outline-[#502F4C] mr-8">
                    <input v-model="email" type="email" name="email" id="email" class="rounded-lg px-2 py-3 bg-[#C8B8DB] outline-[#502F4C] ml-8">
                </div>
                <div class="mb-5">
                    <label for="message" class="ml-4 text-lg text-[#502F4C] font-medium">Message</label>
                    <textarea v-model="message" name="message" id="message" cols="100" rows="10" class="rounded-lg p-2 bg-[#C8B8DB] outline-[#502F4C] resize-none w-full placeholder-[#F9F4F5] italic" placeholder="Vraiment, c'est pas la peine d'écrire là dedans - de toute façon, c'est pas comme si on allait lire ce message"></textarea>
                </div>
                <div>
                    <button  type="submit" class="block py-2 pr-4 pl-3 text-lg text-[#F9F4F5] bg-[#502F4C] rounded-lg">Envoyez</button>
                </div>
            </form>
        </div>
    </main>
    </div>
</template>
<script>
import emailjs from 'emailjs-com'
export default {
    name: 'ContactForm',
    data() {
    return {
      name: '',
      email: '',
      message: ''
    }
  },
  methods: {
    sendEmail(e) {
      try {
        emailjs.sendForm(
            process.env.VUE_APP_EMAIL_SERVICE_ID,
            process.env.VUE_APP_EMAIL_TEMPLATE_ID,
            e.target, 
            process.env.VUE_APP_EMAIL_USER_ID,  {
          name: this.name,
          email: this.email,
          message: this.message
        })
            // Reset form field
      this.name = ''
      this.email = ''
      this.message = ''
      console.log("message bien envoyé")


      } catch(error) {
          console.log({error})
      }

    },
  }
}

</script>
<style>
    
</style>