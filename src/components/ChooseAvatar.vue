<template>
    <div class= "col-start-2 col-span-10 bg-[#F9F4F5] p-4 rounded-lg m-6 lg:p-5 lg:col-span-6 lg:m-12">
            <p class="text-center text-[#000000] font-bold mb-2 md:text-2xl">Choisis un avatar : </p>
            <span class="grid grid-cols-2 my-4 justify-items-center md:gap-x-4 md:gap-y-8 md:grid-cols-3 lg:grid-cols-4 lg:mt-8">

                <span :class="selectedAvatar == 0 ? selected : unselected" @click="selectAvatar(0)">
                    <img src="../../public/assets/img/dil.png" alt="avatar-1" class="rounded-full bg-[#C8B8DB] w-16 h-16 m-2 cursor-pointer md:w-24 md:h-24">
                </span>
                <span :class="selectedAvatar == 1 ? selected : unselected" @click="selectAvatar(1)">
                    <img src="../../public/assets/img/HarounElPoussah.png" alt="avatar-2" class="rounded-full bg-[#C8B8DB] w-16 h-16 m-2 cursor-pointer md:w-24 md:h-24">
                </span>
                <span :class="selectedAvatar == 2 ? selected : unselected" @click="selectAvatar(2)">
                    <img src="../../public/assets/img/petit-nerveux-ambitieux.png" alt="avatar-3" class="rounded-full bg-[#C8B8DB] w-16 h-16 m-2 cursor-pointer md:w-24 md:h-24">
                </span>
                <span :class="selectedAvatar == 3 ? selected : unselected" @click="selectAvatar(3)">
                    <img src="../../public/assets/img/iznogoud.png" alt="avatar-3" class="rounded-full bg-[#C8B8DB] w-16 h-16 m-2 cursor-pointer md:w-24 md:h-24">
                </span>
                <span :class="selectedAvatar == 4 ? selected : unselected" @click="selectAvatar(4)">
                    <img src="../../public/assets/img/dil.png" alt="avatar-1" class="rounded-full bg-[#C8B8DB] w-16 h-16 m-2 cursor-pointer md:w-24 md:h-24">
                </span>
                <span :class="selectedAvatar == 5 ? selected : unselected" @click="selectAvatar(5)">
                    <img src="../../public/assets/img/HarounElPoussah.png" alt="avatar-2" class="rounded-full bg-[#C8B8DB] w-16 h-16 m-2 cursor-pointer md:w-24 md:h-24">
                </span>
                <span :class="selectedAvatar == 6 ? selected : unselected" @click="selectAvatar(6)">
                    <img src="../../public/assets/img/petit-nerveux-ambitieux.png" alt="avatar-3" class="rounded-full bg-[#C8B8DB] w-16 h-16 m-2 cursor-pointer md:w-24 md:h-24">
                </span>
                <span :class="selectedAvatar == 7 ? selected : unselected" @click="selectAvatar(7)">
                    <img src="../../public/assets/img/iznogoud.png" alt="avatar-3" class="rounded-full bg-[#C8B8DB] w-16 h-16 m-2 cursor-pointer md:w-24 md:h-24">
                </span>
                
            </span>
    </div>
</template>

<script>
import { mapActions } from 'vuex'
export default {
    name: 'ChooseAvatar',
    data(){
        return{
            selectedAvatar : -1,
            avatarSrc : "",

            unselected: "ml-10 p-4 text-xl italic bg-[#C8B8DB] cursor-pointer rounded-full w-32 h-32",
            selected: "ml-10 p-4 text-xl italic bg-[#C8B8DB] rounded-lg cursor-pointer rounded-full w-32 h-32",

        }
    },
    methods: {
        ...mapActions(["setAvatar"]),

        selectAvatar(x) {
            this.selectedAvatar = x;
            this.stockAvatarSource()
        },

        stockAvatarSource () {
            switch (this.selectedAvatar) {
                case 0: this.avatarSrc = "../assets/img/dil.png"
                    break;
                case 1: this.avatarSrc = "../assets/img/HarounElPoussah.png"
                    break;
                case 2: this.avatarSrc = "../assets/img/petit-nerveux-ambitieux.png"
                    break;
                case 3: this.avatarSrc = "../assets/img/iznogoud.png"
                    break;
            }
            console.log(this.avatarSrc)
            this.setAvatar(this.avatarSrc)
        }
    }
}
</script>
<style>
    
</style>