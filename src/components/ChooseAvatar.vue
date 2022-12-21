<template>
    <div class= "col-start-2 col-span-10 bg-[#F9F4F5] p-4 rounded-lg m-6 lg:p-5 lg:col-span-6 lg:m-12">
            <p class="text-center text-[#000000] font-bold mb-2 md:text-2xl">Choisis <span @click="selectAvatar(8)"> un</span> avatar : </p>
            <span class="grid grid-cols-2 my-4 justify-items-center md:gap-x-4 md:gap-y-8 md:grid-cols-3 lg:grid-cols-4 lg:mt-8">

                <span :class="selectedAvatar == 0 ? selected : unselected" @click="selectAvatar(0)">
                    <img src="../../public/assets/img/avatar1.png" alt="avatar-1" class="object-fill">
                </span>
                <span :class="selectedAvatar == 1 ? selected : unselected" @click="selectAvatar(1)">
                    <img src="../../public/assets/img/avatar3.png" alt="avatar-3" class="">
                </span>
                <span :class="selectedAvatar == 2 ? selected : unselected" @click="selectAvatar(2)">
                    <img src="../../public/assets/img/avatar4.png" alt="avatar-4" class="">
                </span>
                <span :class="selectedAvatar == 3 ? selected : unselected" @click="selectAvatar(3)">
                    <img src="../../public/assets/img/avatar5.png" alt="avatar-5" class="">
                </span>
                <span :class="selectedAvatar == 4 ? selected : unselected" @click="selectAvatar(4)">
                    <img src="../../public/assets/img/avatar6.png" alt="avatar-6" class="ml-1 mt-1">
                </span>
                <span :class="selectedAvatar == 5 ? selected : unselected" @click="selectAvatar(5)">
                    <img src="../../public/assets/img/avatar7.png" alt="avatar-7" class="">
                </span>
                <span :class="selectedAvatar == 6 ? selected : unselected" @click="selectAvatar(6)">
                    <img src="../../public/assets/img/avatar9.png" alt="avatar-9" class="">
                </span>
                <span :class="selectedAvatar == 7 ? selected : unselected" @click="selectAvatar(7)">
                    <img src="../../public/assets/img/avatar12.png" alt="avatar-12" class="">
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

            unselected: "mx-8 my-3 bg-[#C8B8DB] overflow-hidden rounded-full w-16 h-16 cursor-pointer md:w-24 md:h-24 border-2 border-[#502F4C]",
            selected: "mx-8 my-3 bg-[#C8B8DB] overflow-hidden rounded-full w-16 h-16 cursor-pointer md:w-24 md:h-24 border-4 border-[#502F4C]",

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
                case 0: this.avatarSrc = "../assets/img/avatar1.png"
                    break;
                case 1: this.avatarSrc = "../assets/img/avatar3.png"
                    break;
                case 2: this.avatarSrc = "../assets/img/avatar4.png"
                    break;
                case 3: this.avatarSrc = "../assets/img/avatar5.png"
                    break;
                case 4: this.avatarSrc = "../assets/img/avatar6.png"
                    break;
                case 5: this.avatarSrc = "../assets/img/avatar7.png"
                    break;
                case 6: this.avatarSrc = "../assets/img/avatar9.png"
                    break;
                case 7: this.avatarSrc = "../assets/img/avatar12.png"
                    break;
                case 8: this.avatarSrc = "../assets/img/pfp.png"
                    break;
            }
            this.setAvatar(this.avatarSrc)
        }
    }
}
</script>
<style>
    
</style>