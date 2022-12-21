<template>
    <div>
        <main class="justify-center items-center bg-[#F9F4F5] border-gray-200 mx-10 my-6 md:my-20 md:mx-40 rounded-lg">
        <h2 class="text-3xl text-center py-8 md:text-5xl">Contact</h2>
        <div>
            <p class="text-sm italic font-medium text-center mb-5 md:text-xl">Est-ce <span class="font-black">vraiment</span> nécessaire ?</p>
        </div>
        <!-- <div class="flex justify-center">
            <img class="content-center" src="../../public/assets/img/yeux.png" alt="iznogoud face"> 
        </div> -->
        
        <div id="bgImg" class="flex items-center justify-center border-t-2 border-[#502F4C]">
            <form class="p-2 m-2 md:p-8 lg:p-16 md:m-5 " @submit.prevent="sendEmail">
                <div class="mb-24 md:grid md:grid-cols-2">
                    <label for="name" class="ml-4 text-lg text-[#502F4C] font-medium w-full">Pseudo</label>
                    <input v-model="name" type="text" name="name" id="name" class="rounded-lg px-2 py-3 mb-4 bg-[#C8B8DB] outline-[#502F4C] w-full  opacity-80 border-2">
                    <label for="email" class="ml-4 text-lg text-[#502F4C] font-medium w-full">Adresse mail</label>
                    <input v-model="email" type="email" name="email" id="email" class="rounded-lg px-2 py-3 bg-[#C8B8DB] outline-[#502F4C] w-full opacity-80 border-2">
                </div>
                <div class="mb-5">
                    <label for="message" class="ml-4 text-lg text-[#502F4C] font-medium">Message</label>
                    <textarea v-model="message" name="message" id="message" cols="100" rows="10" class="rounded-lg mt-4 p-4 bg-[#C8B8DB] outline-[#502F4C] resize-none w-full placeholder-[#F9F4F5] italic opacity-80 border-2" placeholder="Vraiment, c'est pas la peine d'écrire là dedans - de toute façon, c'est pas comme si on allait lire ce message"></textarea>
                </div>
                <div>
                    <button type="submit" class="block py-2 px-4 md:my-10 text-lg text-[#F9F4F5] bg-[#502F4C] rounded-lg">Envoyer</button>
                </div>
            </form>
        </div>
    </main>
    </div>
</template>
<script>
import emailjs from 'emailjs-com'
import { mapGetters } from 'vuex'
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
  },
  computed : {
        ...mapGetters(["getCurrentUser"])
    },
    mounted() {
        if (this.getCurrentUser) {
            this.name = this.getCurrentUser.pseudo
            this.email = this.getCurrentUser.email
        }
    }
}

</script>
<style>
    #bgImg{
        background-image: url("../../public/assets/img/yeux20.png");
        background-size: cover;
        background-repeat: no-repeat;   
        background-position: center;
    }

</style>